import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const Game = () => {
  const elementRef = useRef(null);
  const [health, setHealth] = useState(5);
  const [elementWidth, setElementWidth] = useState(null);
  const [elementHeight, setElementHeight] = useState(null);
  const [words, setWords] = useState();

  useEffect(() => {
    // Check if the element ref is available
    if (elementRef.current) {
      // Get the element's dimensions
      const width = elementRef.current.offsetWidth;
      const windowHeight = window.innerHeight;

      // Store the dimensions in state variables
      setElementWidth(width);
      setElementHeight(windowHeight * (83.8 / 100) * 0.9 - 60);
    }

    fetch(
      "https://random-word-api.herokuapp.com/word?number=10&length=5&lang=en"
    )
      .then((response) => response.json())
      .then((result) => setWords(result));
  }, []);

  console.log("words:", words);

  console.log("w:", elementWidth, "h:", elementHeight);

  const getRandomNumber = () => {
    return Math.floor(Math.random() * (elementHeight + 1));
  };

  console.log("Random Y:", getRandomNumber());

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
          <p>00001</p>
        </div>
      </section>

      {/* The Game  */}
      <section className="game-section">
        <div className="mask"></div>
        <div ref={elementRef} className="relative">
          {words?.map((word) => (
            <motion.div
              className=" w-[200px] flex items-center"
              animate={{ y: getRandomNumber(), x: elementWidth }}
              initial={{ x: -100 }} // Use the random initial Y position
              transition={{ type: "tween", duration: 10, y: { duration: 0 } }}
            >
              <p className="text-2xl">{word}</p>
            </motion.div>
          ))}
          {/* <motion.div
            className=" w-[200px] flex items-center"
            animate={{ y: getRandomNumber(), x: elementWidth }}
            initial={{ x: -200 }} // Use the random initial Y position
            transition={{ type: "tween", duration: 10, y: { duration: 0 } }}
          >
            <p className="text-2xl">Kelime</p>
          </motion.div> */}
        </div>
      </section>
    </div>
  );
};

export default Game;
