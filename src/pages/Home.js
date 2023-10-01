import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="p-5 flex flex-col items-center justify-center">
        <h1 className="text-6xl text-white m-2 font-bold tracking-wide">
          TypeRapid
        </h1>
        <p className="text-center text-lg leading-7 text-gray-300 m-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quidem{" "}
          <br />
          reprehenderit odit eligendi, velit, aliquam voluptates nisi numquam{" "}
          <br />
          reiciendis expedita commodi in accusamus sed autem dolorum pariatur,{" "}
          <br />
          iusto nesciunt voluptatibus.
        </p>
        <Link to="/play">
          <button className="text-white text-xl font-semibold bg-red-400 w-44 h-12 rounded-md m-2 tracking-wider">
            Play
          </button>
        </Link>
        <Link to="/about">
          <button className="text-white text-xl font-semibold bg-red-400 w-44 h-12 rounded-md m-2 tracking-wider">
            About
          </button>
        </Link>
        <Link to="/leaderboard">
          {" "}
          <button className="text-white text-xl font-semibold bg-red-400 w-44 h-12 rounded-md m-2 tracking-wider">
            Leaderboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
