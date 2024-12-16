import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import { createRoot } from 'react-dom/client';

// import './styles/main.scss';
import { App } from './App';

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
