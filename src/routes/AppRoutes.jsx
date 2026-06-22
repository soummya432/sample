import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import Layout from "../layout/Layout";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddExpense from "../pages/AddExpense/AddExpense";
import EditExpense from "../pages/EditExpense/EditExpense";
import Transactions from "../pages/Transactions/Transactions";
import Profile from "../pages/Profile/Profile";

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
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
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
            element: <Dashboard />,
          },
          {
            path: "add-expense",
            element: <AddExpense />,
          },
          {
            path: "edit-expense/:expenseId",
            element: <EditExpense />,
          },
          {
            path: "transactions",
            element: <Transactions />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);

export default router;
