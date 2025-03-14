import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { createBrowserRouter, RouterProvider } from 'react-router'
import { FormPage } from './pages/HtmlForm'
import { AriaFormPage } from './pages/AriaForm'
import { ReactHookFormPage } from './pages/ReactHookForm'
import { AriaFormCompositePage } from './pages/AriaFormComposite'

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
        path: "/react-hook-form",
        element: <ReactHookFormPage />,
      },
      {
        path: "/aria-form-version-2",
        element: <AriaFormCompositePage />,
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
