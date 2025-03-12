import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/defaultLayout";
import Login from "../../auth/login/login";
import Register from "../../auth/register/register";
import ErrorPage from "../../errors/errorPage";
import ForgotPassword from "../../auth/forgot-password/forgotPassword";
import MainLayout from "../layouts/mainLayout";
import Home from "../../home/home";

export const router = createBrowserRouter([
  // Set defaultLayout as a default layout
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true, // ✅ Load this when visiting "/"
        element: <Login />, // Default Page
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },

  // Set mainLayout as a default layout
  {
    path: "/home",
    element: <MainLayout />,
    errorElement: <ErrorPage />,

    children: [    
      {       
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

