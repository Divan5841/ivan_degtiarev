import { FC, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { Application } from '@splinetool/runtime';

import { useDocumentEvent } from '@utils/hooks';

export const SplineViewer: FC = () => {
  const ref = useRef<Application>();

  const onLoad = (splineApp: Application) => {
    ref.current = splineApp;
  };

  useDocumentEvent('click', () => {
    ref.current?.emitEvent('mouseDown', 'fa9b7adf-3339-4ac0-9709-e4d3fee23b6c');
  });

  return (
    <Spline
      scene="https://prod.spline.design/EmlDnXa0p30yfFyB/scene.splinecode"
      onLoad={onLoad}
    />
  );
};
