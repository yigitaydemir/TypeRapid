import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  arrayRemove,
  arrayUnion,
  doc,
  setDoc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "../utils/Firebase";

const Game = () => {
  const elementRef = useRef(null);
  const inputRef = useRef(null);
  const [elementWidth, setElementWidth] = useState(null);
  const [elementHeight, setElementHeight] = useState(null);

  const [words, setWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1);

  const [wordsList, setWordsList] = useState([]);

  const [health, setHealth] = useState(5);
  const [letters, setLetters] = useState(5);
  const [score, setScore] = useState(0);
  const [delay, setDelay] = useState(5000);
  const [duration, setDuration] = useState(10);

  const [game, setGame] = useState(true);

  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    if (elementRef.current) {
      const width = elementRef.current.offsetWidth;
      const windowHeight = window.innerHeight;

      setElementWidth(width);
      setElementHeight(windowHeight * (5 / 6) * 0.9 - 300);

      console.log("window height:", elementHeight);
    }
  }, []);

  useEffect(() => {
    if (elementHeight !== null) {
      fetch(
        `https://random-word-api.herokuapp.com/word?number=10&length=${letters}&lang=en`
      )
        .then((response) => response.json())
        .then((result) => {
          const wordsPair = result.map((word) => ({
            word,
            positionY: getRandomNumber(),
          }));
          setWords(wordsPair);
          setWordsList((prevWordsList) => [...prevWordsList, ...result]);
        });

      console.log(wordsList);
      console.log(words);
    }
  }, [letters, elementHeight, game]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < words.length) {
        setCurrentIndex(currentIndex + 1);
      } else if (currentIndex === 10) {
        setLetters(letters + 1);
        if (duration < 5) {
          setDuration(duration - 1);
        }
        setCurrentIndex(0);
        if (delay > 1000) {
          setDelay(delay - 500);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [currentIndex, words]);

  const handleOverlayClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const getRandomNumber = () => {
    return Math.floor(Math.random() * (elementHeight + 1));
  };

  const handleTyping = (e) => {
    const inputText = e.target.value.toLowerCase().slice(-letters);
    setUserInput(inputText);
    console.log("input:", inputText);

    if (wordsList.includes(inputText)) {
      const updatedWordsList = wordsList.filter((word) => word !== inputText);
      setWordsList(updatedWordsList);
      e.target.value = "";
    }
  };

  const handleSuccess = () => {
    setScore((prevScore) => {
      return prevScore + 5;
    });
  };

  const handleFail = () => {
    setHealth((prevHealth) => {
      if (prevHealth > 0) {
        return prevHealth - 1;
      } else {
        return prevHealth;
      }
    });

    if (health <= 1) {
      setGame(false);
    }
  };

  const tryAgain = () => {
    setHealth(5);
    setScore(0);
    setCurrentIndex(1);
    setLetters(5);
    setWordsList([]);
    setWords([]);
    setDelay(5000);
    setGame(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const saveScore = (e) => {
    const leaderboardRef = doc(db, "Leaderboard", "Leaderboard");
    setDoc(leaderboardRef, { capital: true }, { merge: true });
    e.preventDefault();
  };

  return (
    <div className="h-full text-white">
      {/* Healthbar and Score */}
      <section className="border-b-2 border-white h-[10%] p-2 sm:p-10 text-xl flex items-center justify-between">
        <div className="flex items-center gap-2">
          <p>Health: </p>
          <div className="w-52 h-6 border-2 grid grid-cols-5">
            <div
              className={health >= 1 ? "col-span-1 bg-red-600" : "col-span-1"}
            ></div>
            <div
              className={health >= 2 ? "col-span-1 bg-red-600" : "col-span-1"}
            ></div>
            <div
              className={health >= 3 ? "col-span-1 bg-red-600" : "col-span-1"}
            ></div>
            <div
              className={health >= 4 ? "col-span-1 bg-red-600" : "col-span-1"}
            ></div>
            <div
              className={health === 5 ? "col-span-1 bg-red-600" : "col-span-1"}
            ></div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <p>Score:</p>
          <p>{score}</p>
        </div>
      </section>

      {/* The Game  */}
      <section className="game-section h-[90%]">
        {game && <div className="overlay" onClick={handleOverlayClick} />}
        <div className="mask"></div>
        <div ref={elementRef} className="relative">
          {/* users input */}
          <div className="text-center text-2xl">
            <form onSubmit={handleFormSubmit}>
              <input
                ref={inputRef}
                type="text"
                className="bg-transparent outline-none text-center max-w-[250px]"
                autoFocus
                onChange={handleTyping}
                disabled={game ? false : true}
              />
            </form>
          </div>
          {game ? (
            words?.slice(0, currentIndex).map((word, index) => (
              <motion.div
                key={index}
                className=" w-[200px] flex items-center m-0 p-0"
                animate={
                  wordsList.includes(word.word)
                    ? { y: word.positionY, x: elementWidth }
                    : {
                        opacity: 0,
                        y: word.positionY,
                        x: elementWidth,
                        transition: 1,
                      }
                }
                initial={{ x: -100 }}
                transition={{
                  type: "tween",
                  duration: duration,
                  ease: "linear",
                  y: { duration: 0 },
                }}
                onAnimationComplete={
                  wordsList.includes(word.word) ? handleFail : handleSuccess
                }
              >
                <p className="text-2xl">{word.word}</p>
              </motion.div>
            ))
          ) : (
            <div className="w-full p-20 flex flex-col items-center">
              <h1 className="text-center text-6xl">Game Over</h1>

              <form>
                <label className="text-2xl">Player Name:</label>
                <input
                  type="text"
                  className="text-2xl bg-transparent outline-none border-b-white border-b-2"
                />
              </form>

              <button
                className="text-white text-xl bg-red-400 w-44 h-12 rounded-md m-2 tracking-wider"
                //onClick={tryAgain}
              >
                Save Your Score
              </button>
              <button
                className="text-white text-3xl bg-red-400 w-44 h-12 rounded-md m-2 tracking-wider"
                onClick={tryAgain}
              >
                Try Again
              </button>

              <Link to="/leaderboard">
                {" "}
                <button className="text-white text-xl font-semibold bg-red-400 w-44 h-12 rounded-md m-2 tracking-wider">
                  Leaderboard
                </button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Game;
