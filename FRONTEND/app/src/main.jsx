import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './onboarding/login.jsx';
import SignUpApplication from './onboarding/sign_up.jsx'; // Ensure the correct case
import OtpCustomer from './onboarding/otp.jsx';
import WelcomePage from './onboarding/welcome_page.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/submit',
    element: <SignUpApplication/>
  },
  {
    path: '/otp',
    element: <OtpCustomer/>
  },
  {
    path: '/home',
    element: <WelcomePage/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
