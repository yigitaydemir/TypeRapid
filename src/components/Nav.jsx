import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="bg-gray-800">
      <div className="text-white w-11/12 max-w-screen-xl m-auto p-2 flex items-center justify-between shadow-xl">
        <h1>TypeRapid</h1>

        <nav>
          <ul className="flex">
            <li className="m-1">
              <Link to="/">Home</Link>
            </li>
            <li className="m-1">
              <Link to="/play">Play</Link>
            </li>
            <li className="m-1">
              <Link to="/leaderboard">Leaderboard</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
