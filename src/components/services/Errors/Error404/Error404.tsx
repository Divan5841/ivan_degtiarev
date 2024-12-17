import { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { Urls } from '@services/Route';

export const Error404: FC = () => <Navigate to={Urls.Low} replace />;
