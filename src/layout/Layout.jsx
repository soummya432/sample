import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <>
      <header className="navbar">

        <div className="logo">
          💰 Budget Tracker
        </div>

        <nav>
          <Link to="/home">Home</Link>
          <Link to="/dashbord">Dashboard</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </nav>

      </header>

      <Outlet />
    </>
  );
}

export default Layout;