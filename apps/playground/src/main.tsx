import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { createBrowserRouter, RouterProvider } from 'react-router'
import { FormPage } from './pages/form'
import { AriaFormPage } from './pages/AriaForm'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/form",
        element: <FormPage />,
      },
      {
        path: "/aria-form",
        element: <AriaFormPage />,
      },
      {
        path: "/contact",
        element: <FormPage />,
      },
    ],
  },
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
