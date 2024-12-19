import { useCallback, useEffect, useRef } from 'react';

export const useEvent = <F extends (...args: any[]) => any>(fn: F): F => {
  const fnRef = useRef(fn);

  useEffect(() => {
    fnRef.current = fn;
  }, [fn]);

  const eventCb = useCallback<F>(
    ((...args: Parameters<F>) => fnRef.current.apply(null, args)) as F,
    [fnRef],
  );

  return eventCb;
};

export const useDocumentEvent = <E extends keyof DocumentEventMap>(
  type: E,
  cb: (event: DocumentEventMap[E]) => void,
) => {
  const eventCb = useEvent(cb);

  const stopListening = () => {
    document.removeEventListener(type, eventCb);
  };

  useEffect(() => {
    document.addEventListener(type, eventCb);

    return () => stopListening();
  }, [type, eventCb]);

  return { stopListening };
};
