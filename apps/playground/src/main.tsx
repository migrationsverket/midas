import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import '@midas-ds/components/default.css'
import '@midas-ds/layout/default.css'

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
