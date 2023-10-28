import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/Firebase";
import { Link } from "react-router-dom";

const Leaderboard = () => {
  const [scores, setScores] = useState();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [scoresPerPage, setScoresPerPage] = useState(10);

  useEffect(() => {
    getScores();
  }, []);

  const getScores = async () => {
    setLoading(true);

    const docRef = doc(db, "Leaderboard", "Leaderboard");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const sortedScores = docSnap
        .data()
        .Leaderboard.sort((a, b) => b.score - a.score);
      setScores(sortedScores);
    }

    setLoading(false);
  };

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <h1 className="text-white text-6xl">Loading...</h1>;
      </div>
    );
  }

  const indexOfLastScore = currentPage * scoresPerPage;
  const indexOfFirstScore = indexOfLastScore - scoresPerPage;
  const currentScores = scores?.slice(indexOfFirstScore, indexOfLastScore);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(scores?.length / scoresPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="relative h-full text-white flex flex-col items-center justify-between">
      <h1 className="text-6xl">Leaderboard</h1>

      <div className="h-3/5 w-full flex items-start justify-center">
        <table class="table-fixed w-11/12">
          <thead>
            <tr>
              <th className="border-2 p-2">Player Name</th>
              <th className="border-2">Score</th>
            </tr>
          </thead>
          <tbody>
            {currentScores?.map((score) => (
              <tr>
                <td className="border-2 p-2">{score.playerName}</td>
                <td className="border-2 p-2">{score.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="flex">
        {pageNumbers.map((number) => (
          <li key={number}>
            <a onClick={() => paginate(number)} href="#" className="text-2xl m-1 px-2 py-1 border-2">
              {number}
            </a>
          </li>
        ))}
      </ul>

      <div>
        <Link to="/">
          <button className="text-white text-3xl bg-red-400 w-44 h-12 rounded-md m-2 tracking-wider active:scale-95">
            Home
          </button>
        </Link>
        <Link to="/play">
          <button className="text-white text-3xl bg-red-400 w-44 h-12 rounded-md m-2 tracking-wider active:scale-95">
            play
          </button>
        </Link>

        <Link to="/about">
          {" "}
          <button className="text-white text-3xl bg-red-400 w-44 h-12 rounded-md m-2 tracking-wider active:scale-95">
            About
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Leaderboard;
