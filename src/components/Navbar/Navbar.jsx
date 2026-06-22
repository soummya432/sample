import { useAuthContext } from "../../auth/AuthContext";
import "./Navbar.css";

function Navbar() {
  const { user } = useAuthContext();

  return (
    <header className="navbar-shell">
      <div>
        <p className="navbar-greeting">Good day, {user?.name || "Finance Leader"}</p>
        <h1>Expense Tracker Dashboard</h1>
      </div>
      <div className="navbar-meta">
        <div className="navbar-chip">
          <span>Welcome back</span>
          <strong>{user?.name?.split(" ")[0] || "User"}</strong>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
