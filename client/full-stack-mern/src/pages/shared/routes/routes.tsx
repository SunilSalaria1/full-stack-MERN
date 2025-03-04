import {createBrowserRouter} from "react-router-dom";
import DefaultLayout from "../layouts/defaultLayout";
import Login from "../../auth/login/login";
import Register from "../../auth/register/register";
import ErrorPage from "../../errors/errorPage";
import ForgotPassword from "../../auth/forgot-password/forgotPassword";

export const router = createBrowserRouter([
  {
    path: "",
    element: <DefaultLayout />, // Set defaultLayout as a default layout
    errorElement: <ErrorPage />, // Set error page globally
    loader: () => {
      return null;
    },
    children: [
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
]);

