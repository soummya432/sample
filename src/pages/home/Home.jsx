import "./home.css";
import { Link } from "react-router-dom";

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