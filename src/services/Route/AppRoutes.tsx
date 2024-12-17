import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Urls } from './index';

import { Error404 } from '@components/services/Errors/Error404/Error404';
import { Low } from '@pages/Low/Low';

export const AppRoutes: FC = () => (
  <Routes>
    <Route path={Urls.Home} element={<Low />} />
    <Route path={Urls.Error404} element={<Error404 />} />
  </Routes>
);
