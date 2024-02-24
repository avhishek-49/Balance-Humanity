import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CampaignForm from "./components/CampaignForm.jsx";
import DonateForm from "./components/DonateForm.jsx";
import Profile from "./components/Profile.jsx";
import VerifyKyc from "./components/VerifyKYC.jsx";
import App from "./onboarding/login.jsx";
import OtpCustomer from "./onboarding/otp.jsx";
import SignUpApplication from "./onboarding/sign_up.jsx"; // Ensure the correct case
import WelcomePage from "./onboarding/welcome_page.jsx";
import {QueryClient, QueryClientProvider} from 'react-query'
import ForgotPassword from "./onboarding/ForgotPassword.jsx";

 const client=  new QueryClient

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/submit",
    element: <SignUpApplication />,
  },
  {
    path: "/otp",
    element: <OtpCustomer />,
  },
  {
    path: "/home",
    element: <WelcomePage />,
  },
  {
    path: "/start-campaign",
    element: <CampaignForm />,
  },
  {
    path: "/donate",
    element: <DonateForm />,
  },
  {
    path: "/verify-kyc",
    element: <VerifyKyc />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
    {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
          <QueryClientProvider client={client}>
          <RouterProvider router={router}>
             
          </RouterProvider>
    </QueryClientProvider>
     <ToastContainer />
    </div>
  </React.StrictMode>
);
