import { createSearchParams, URLSearchParamsInit } from 'react-router-dom';

export interface GenerateSearchConfig {
  url: string;
  search?: URLSearchParamsInit;
  searchKeep?: boolean;
}

export function generateSearch(config: GenerateSearchConfig): string {
  if (!config.search && !config.searchKeep) return config.url;

  const search = new URLSearchParams();

  if (config.searchKeep) {
    const locationSearch = new URLSearchParams(location.search);
    locationSearch.forEach((query, key) => search.set(key, query));
  }

  if (config.search) {
    const configSearch = createSearchParams(config.search);
    configSearch.forEach((query, key) => search.set(key, query));
  }

  return `${config.url}?${search.toString()}`;
}
