import { generatePath } from 'react-router-dom';

import { generateSearch, GenerateSearchConfig } from './generateSearch';

interface Config extends GenerateSearchConfig {
  params?: Partial<Record<string, string>>;
}

export const generateUrl = (config: Config): string => {
  return generateSearch({
    url: generatePath(config.url, config.params),
    search: config.search,
    searchKeep: config.searchKeep,
  });
};
