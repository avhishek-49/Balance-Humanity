import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUpApplication from './pages/sign_up.jsx'; // Ensure the correct case

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
