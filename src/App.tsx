import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from '@components/services/ErrorBoundry/ErrorBoundry';
import { AppRoutes } from '@services/Route';

export const App = () => (
  <BrowserRouter basename={process.env.APP_BASE_URI}>
    <StrictMode>
      <ErrorBoundary>
        <AppRoutes />
      </ErrorBoundary>
    </StrictMode>
  </BrowserRouter>
);
