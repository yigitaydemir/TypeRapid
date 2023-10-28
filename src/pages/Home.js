import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="p-5 flex flex-col items-center justify-center">
        <h1 className="text-6xl text-white m-2 font-bold tracking-wide">
          TypeRapid
        </h1>
        <p className="text-center text-xl leading-7 tracking-wider about text-gray-300 m-2 lg:px-40">
          Typerapid is an engaging speed typing game where players strive to
          achieve the highest score by accurately typing words before they
          disappear from the screen. Compete with your friends on the
          leaderboard to showcase your typing skills.
        </p>

        <Link to="/play">
          <button className="text-white text-xl font-semibold bg-red-400 w-44 h-12 rounded-md m-2 tracking-wider active:scale-95">
            Play
          </button>
        </Link>
        <Link to="/about">
          <button className="text-white text-xl font-semibold bg-red-400 w-44 h-12 rounded-md m-2 tracking-wider active:scale-95">
            About
          </button>
        </Link>
        <Link to="/leaderboard">
          {" "}
          <button className="text-white text-xl font-semibold bg-red-400 w-44 h-12 rounded-md m-2 tracking-wider active:scale-95">
            Leaderboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
