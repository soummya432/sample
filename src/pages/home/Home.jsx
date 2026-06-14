import "./home.css";
import Profile from "../profile/Profile";
import { Link } from "react-router";

function Home() {
  return (
    <div id="home">
      <h1>Welcome to Budget Tracker</h1>

      <p>
        Track your expenses and manage your budget easily.
      </p>

    <Link to={"/profile"}>
      <button>Go to profile</button>
    </Link>
    </div>
  );
}

export default Home;