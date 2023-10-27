import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/Firebase";
import { Link } from "react-router-dom";

const Leaderboard = () => {
  const [scores, setScores] = useState();

  useEffect(() => {
    getScores();
  }, []);

  const getScores = async () => {
    const docRef = doc(db, "Leaderboard", "Leaderboard");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setScores(docSnap.data().Leaderboard);
      console.log(scores);
    }
  };

  return (
    <div className="relative h-full text-white flex flex-col items-center justify-between">
      <h1 className="text-6xl">Leaderboard</h1>

      <table class="table-fixed w-11/12">
        <thead>
          <tr>
            <th className="border-2 p-2">Player Name</th>
            <th className="border-2">Score</th>
          </tr>
        </thead>
        <tbody>
          {scores?.map((score) => (
            <tr>
              <td className="border-2 p-2">{score.playerName}</td>
              <td className="border-2 p-2">{score.score}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <Link to="/">
          <button className="text-white text-3xl bg-red-400 w-44 h-12 rounded-md m-2 tracking-wider">
            Home
          </button>
        </Link>
        <Link to="/play">
          <button className="text-white text-3xl bg-red-400 w-44 h-12 rounded-md m-2 tracking-wider">
            play
          </button>
        </Link>

        <Link to="/about">
          {" "}
          <button className="text-white text-3xl bg-red-400 w-44 h-12 rounded-md m-2 tracking-wider">
            About
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Leaderboard;
