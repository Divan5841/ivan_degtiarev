import { FC } from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';

import { Urls } from './index';

import { Error404 } from '@components/services/Errors/Error404/Error404';
import { Low } from '@pages/Low/Low';

const routes: RouteObject[] = [
  { path: Urls.Home, element: <Navigate to={Urls.Low} /> },
  { path: Urls.Low, element: <Low /> },
  { path: Urls.Error404, element: <Error404 /> },
];

export const AppRoutes: FC = () => useRoutes(routes);
