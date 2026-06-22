import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Layout() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/auth/login");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="flex flex-col gap-4 border-b border-slate-800 bg-slate-900/95 px-6 py-5 backdrop-blur-sm md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3 text-lg font-semibold text-cyan-300">
          <span>💰</span>
          <span>Expense Tracker</span>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-200">
          <Link className="rounded-full px-4 py-2 transition hover:bg-slate-800" to="/dashboard">
            Dashboard
          </Link>
          <Link className="rounded-full px-4 py-2 transition hover:bg-slate-800" to="/home">
            Home
          </Link>
          <Link className="rounded-full px-4 py-2 transition hover:bg-slate-800" to="/profile">
            Profile
          </Link>
          <Link className="rounded-full px-4 py-2 transition hover:bg-slate-800" to="/transaction">
            Transactions
          </Link>
        </div>

        <div className="flex flex-col gap-3 items-start md:items-end">
          <p className="text-sm text-slate-400">Signed in as {user?.name || user?.email || "Member"}</p>
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-full bg-rose-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-400"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="px-4 py-8 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
