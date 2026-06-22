import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginPage from "../features/auth/LoginPage";
import SignupPage from "../features/auth/SignupPage";
import Layout from "../layouts/Layout";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/home/Home";
import Dashbord from "../pages/dashbord/Dashbord";
import Profile from "../pages/profile/Profile";
import TransactionHistory from "../pages/transactions/TransactionHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: "/auth",
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
    ],
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: "dashboard",
            element: <Dashbord />,
          },
          {
            path: "home",
            element: <Home />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "transaction",
            element: <TransactionHistory />,
          },
        ],
      },
    ],
  },
]);

export default router;
