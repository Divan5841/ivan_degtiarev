import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const App = () => (
  <BrowserRouter>
    <StrictMode>
      {/*<ErrorBoundary>*/}
      <div>qwe</div>
      {/*</ErrorBoundary>*/}
    </StrictMode>
  </BrowserRouter>
);
