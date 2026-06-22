import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../auth/AuthContext";
import "./ProtectedRoute.css";

function ProtectedRoute() {
  const { isAuthenticated, loading } = useAuthContext();

  if (loading) {
    return (
      <div className="protected-loading">
        <div className="protected-spinner" />
        <p>Restoring your secure session...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
