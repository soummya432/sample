import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../auth/AuthContext";
import "./Sidebar.css";

const navItems = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Add Expense", path: "/add-expense" },
  { label: "Transactions", path: "/transactions" },
  { label: "Profile", path: "/profile" },
];

function Sidebar() {
  const { logout, user } = useAuthContext();
  const navigate = useNavigate();

  return (
    <aside className="sidebar-shell">
      <div className="sidebar-brand">
        <span>ET</span>
        <div>
          <p>Expense Tracker</p>
          <small>Fintech dashboard</small>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} className={({ isActive }) => `sidebar-link ${isActive ? "active" : ""}`}>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-user">
          <span>{user?.name?.charAt(0).toUpperCase() || "U"}</span>
          <div>
            <p>{user?.name || "Expense User"}</p>
            <small>{user?.email || "user@example.com"}</small>
          </div>
        </div>
        <button className="sidebar-logout" type="button" onClick={() => { logout(); navigate("/auth/login"); }}>
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
