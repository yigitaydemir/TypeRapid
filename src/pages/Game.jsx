import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const Game = () => {
  const elementRef = useRef(null);
  const [health, setHealth] = useState(5);
  const [elementWidth, setElementWidth] = useState(null);
  const [elementHeight, setElementHeight] = useState(null);

  useEffect(() => {
    // Check if the element ref is available
    if (elementRef.current) {
      // Get the element's dimensions
      const width = elementRef.current.offsetWidth;
      const windowHeight = window.innerHeight;

      // Store the dimensions in state variables
      setElementWidth(width);
      setElementHeight(windowHeight);
    }
  }, []);

  console.log("w:", elementWidth, "h:", elementHeight)

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
      <section ref={elementRef} className="">
        <motion.div
          className="bg-green-500 w-[200px] h-[60px] flex items-center"
          animate={{ y: 727, x:0 }}
          // transition={{ type: "tween", duration: 6 }}
        >
          <p className="text-2xl">Kelime</p>
        </motion.div>
      </section>
    </div>
  );
};

export default Game;
