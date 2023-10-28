import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="p-5 flex flex-col items-center justify-center">
        <h1 className="text-6xl text-white m-2 font-bold tracking-wide">
          TypeRapid
        </h1>
        <p className="text-center text-xl leading-7 tracking-wider about text-gray-300 m-2 px-40">
          Typerapid represents a dynamic speed typing game that challenges
          players to achieve peak performance by accurately typing words before
          they elapse from the screen. Adding to the complexity, words gradually
          increase in size and velocity as players advance through the game,
          testing and enhancing their typing agility. Furthermore, we encourage
          you to record your scores, securing your place on the leaderboard, and
          enabling you to engage in friendly competition with your peers.
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
