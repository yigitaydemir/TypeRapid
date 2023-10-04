import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const Game = () => {
  const elementRef = useRef(null);
  const [elementWidth, setElementWidth] = useState(null);
  const [elementHeight, setElementHeight] = useState(null);

  const [words, setWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const [health, setHealth] = useState(5);
  const [letters, setLetters] = useState(5);
  const [score, setScore] = useState(0);
  const [delay, setDelay] = useState(5000);

  const [game, setGame] = useState(true);

  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    if (elementRef.current) {
      const width = elementRef.current.offsetWidth;
      const windowHeight = window.innerHeight;

      setElementWidth(width);
      setElementHeight(windowHeight * (83.8 / 100) * 0.9 - 120);
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
            failed: false
          }));
          setWords(wordsPair);
        });
    }

    console.log(words);
  }, [letters, elementHeight]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < words.length) {
        setCurrentIndex(currentIndex + 1);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [currentIndex, words]);

  const getRandomNumber = () => {
    return Math.floor(Math.random() * (elementHeight + 1));
  };

  const handleTyping = (e) => {
    setUserInput(e.target.value);
    console.log(userInput);
  };

  const handleFail = (word, index) => {
    // if (health > 0) {
    //   setHealth(health - 1);
    // } else {
    //   setGame(false);
    // }
    // console.log("inital health state:", health)
    // if (index === currentWordIndex) { // Check if this is the current word
    //   if (health > 0) {
    //     setHealth(health - 1);
    //     console.log("decreased health state:", health)
    //   } else {
    //     setGame(false);
    //     console.log("final health state:", health)
    //   }
    //   setCurrentWordIndex(index + 1); // Move to the next word
    // }

    setHealth((prevHealth) => {
      if (index === currentWordIndex && prevHealth > 0) {
        setCurrentWordIndex(index + 1); // Move to the next word
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
    setGame(true);
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
      <section className="game-section">
        <div className="mask"></div>
        <div ref={elementRef} className="relative">
          {/* users input */}
          <div className="text-center text-2xl">
            <form>
              <input
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
                className=" w-[200px] flex items-center"
                animate={{ y: word.positionY, x: elementWidth }}
                initial={{ x: -100 }}
                transition={{
                  type: "tween",
                  duration: 10,
                  y: { duration: 0 },
                }}
                onAnimationComplete={() => handleFail(word, index)}
              >
                <p className="text-2xl">{word.word}</p>
              </motion.div>
            ))
          ) : (
            <div className="w-full p-20 flex flex-col items-center">
              <h1 className="text-center text-6xl">Game Over</h1>
              <button
                className="text-white text-3xl bg-red-400 w-44 h-12 rounded-md m-2 tracking-wider"
                onClick={tryAgain}
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Game;
