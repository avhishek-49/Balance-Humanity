import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './onboarding/login.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUpApplication from './onboarding/sign_up.jsx'; // Ensure the correct case

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'submit',
    element: <SignUpApplication/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

