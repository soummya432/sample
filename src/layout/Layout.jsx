import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <>
      <div id="header">
        <h2>Budget Tracker</h2>

        <nav>
          <Link to="/home">Home</Link>
          <Link to="/dashbord">Dashboard</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign up</Link>
           <Link to="/profile">Profile</Link>
        </nav>
      </div>

      <Outlet />
    </>
  );
}

export default Layout;