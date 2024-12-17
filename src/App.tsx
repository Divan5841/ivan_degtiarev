import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from '@components/services/ErrorBoundry/ErrorBoundry';
import { AppRoutes } from '@services/Route';

export const App = () => (
  <BrowserRouter basename={'/ivan_degtiarev'}>
    <StrictMode>
      <ErrorBoundary>
        <AppRoutes />
      </ErrorBoundary>
    </StrictMode>
  </BrowserRouter>
);
