import { useParams } from 'react-router-dom';

export const useUrlParams = <P extends string>(): Record<P, string> => {
  return useParams<P>() as Record<P, string>;
};
