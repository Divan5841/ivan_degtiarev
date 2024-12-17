import { URLSearchParamsInit, useNavigate } from 'react-router-dom';

import { UrlParam, Urls, UrlsKeys } from '../urls';
import { generateUrl } from '../helpers/generateUrl';

interface Config {
  url?: string;
  params?: Partial<Record<UrlParam, string>>;
  search?: URLSearchParamsInit;
  searchKeep?: boolean;
  replace?: boolean;
}

interface Routes extends Record<UrlsKeys, (config?: Config) => void> {
  go: (config: Config) => void;
  back: () => void;
}

export const useNavigator = (): Routes => {
  const navigate = useNavigate();

  const go = (config: Config) => {
    if (!config.url) return;

    // @ts-ignore
    navigate(generateUrl(config), { replace: config.replace });
  };

  const routes = Object.entries(Urls).reduce((routes, [key, url]) => {
    routes[key as UrlsKeys] = (config) => go({ url, ...config });
    return routes;
  }, {} as Routes);

  routes.go = go;

  routes.back = () => navigate(-1);

  return routes;
};
