import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import { createRoot } from 'react-dom/client';

import './styles/main.scss';
import { onResizeViewport } from './styles/helpers';
import { App } from './App';

onResizeViewport();

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
