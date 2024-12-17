import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { UrlSearch } from '../urls';

export const useUrlSearch = (): Record<UrlSearch, string | undefined> => {
  const { search } = useLocation();

  return useMemo(() => {
    const urlSearchParams = new URLSearchParams(search);

    return Object.values(UrlSearch).reduce<Record<string, string | undefined>>(
      (result, searchKey) => {
        result[searchKey] = urlSearchParams.get(searchKey) || undefined;

        return result;
      },
      {},
    );
  }, [search]);
};
