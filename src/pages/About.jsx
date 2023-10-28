import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="text-white w-full h-full flex flex-col items-center justify-between bg-black bg-opacity-70 rounded-xl">
      <h1 className="text-6xl">About</h1>

      <p className="p-5 leading-7 tracking-wider text-xl about">
        Greetings,
        <br />
        <br />
        I am Yiğit, a Front End Developer hailing from Istanbul, Turkey. I take
        pride in presenting an application that showcases my expertise in
        ReactJS, exemplifying my capabilities as a skilled developer.
        <br />
        <br />
        Typerapid represents a dynamic speed typing game that challenges players
        to achieve peak performance by accurately typing words before they
        elapse from the screen. Adding to the complexity, words gradually
        increase in size and velocity as players advance through the game,
        testing and enhancing their typing agility. Furthermore, we encourage
        you to record your scores, securing your place on the leaderboard, and
        enabling you to engage in friendly competition with your peers.
        <br />
        <br />
        Thank you for considering my application. I look forward to any feedback
        or inquiries you may have.
      </p>

      <ul className="w-full p-5 list-disc leading-7 tracking-wider about text-xl">
        <h1 className="text-4xl">Key Features</h1>
        <li>
          The software is created utilizing ReactJS, a robust JavaScript
          framework.
        </li>
        <li>The words are fetched from the Random Word API.</li>
        <li>animations are made with framer motion</li>
        <li>Styling is implemented with tailwind css</li>
        <li>scores in the leaderboard are stored by google firestore</li>
      </ul>

      <div>
        <Link to="/">
          <button className="text-white text-3xl bg-red-400 w-44 h-12 rounded-md m-2 tracking-wider active:scale-95">
            Home
          </button>
        </Link>
        <Link to="/play">
          <button className="text-white text-3xl bg-red-400 w-44 h-12 rounded-md m-2 tracking-wider active:scale-95">
            See Code
          </button>
        </Link>

        <Link to="/about">
          {" "}
          <button className="text-white text-3xl bg-red-400 w-44 h-12 rounded-md m-2 tracking-wider active:scale-95">
            Contact Me
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
