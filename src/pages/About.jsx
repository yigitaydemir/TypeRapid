import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="text-white w-full h-full flex flex-col items-center justify-between bg-black bg-opacity-70 rounded-xl overflow-auto">
      <h1 className="text-6xl">About</h1>

      <p className="px-5 leading-7 tracking-wider about text-xl">
        Greetings,
        <br />
        I am Yiğit, a Front End Developer hailing from Istanbul, Turkey. I take
        pride in presenting an application that showcases my expertise in
        ReactJS, exemplifying my capabilities as a skilled developer.
        <br />
        Typerapid represents a dynamic speed typing game that challenges players
        to achieve peak performance by accurately typing words before they
        elapse from the screen. Adding to the complexity, words gradually
        increase in size and velocity as players advance through the game,
        testing and enhancing their typing agility. Furthermore, we encourage
        you to record your scores, securing your place on the leaderboard, and
        enabling you to engage in friendly competition with your peers.
        <br />
        Thank you for considering my application. I look forward to any feedback
        or inquiries you may have.
      </p>

      <ul className="w-full px-5 list-disc leading-7 tracking-wider about text-xl">
        <h1 className="text-xl underline">Key Features</h1>
        <li>
          The game is created utilizing <a href="https://legacy.reactjs.org/" target="blank" className=" underline">ReactJS</a>, a robust JavaScript
          framework
        </li>
        <li>The words are fetched randomly from the <a href="https://random-word-api.herokuapp.com/home" target="blank" className="underline">Random Word API</a></li>
        <li>Animations are created using the <a href="https://www.framer.com/motion/" target="blank" className="underline">Framer Motion library</a></li>
        <li>Styling is implemented with <a href="https://tailwindcss.com/" target="blank" className="underline">TailwindCSS</a></li>
        <li>Leaderboard scores are stored using <a href="https://firebase.google.com/docs/firestore?hl=tr" target="blank" className="underline">Google Firestore</a></li>
      </ul>

      <div className="flex flex-wrap items-center justify-center">
        <Link to="/">
          <button className="text-white text-3xl bg-red-400 w-44 h-12 rounded-md m-2 tracking-wider active:scale-95">
            Home
          </button>
        </Link>
        <a href="https://github.com/yigitaydemir/typerapid" target="blank">
          <button className="text-white text-3xl bg-red-400 w-44 h-12 rounded-md m-2 tracking-wider active:scale-95">
            See Code
          </button>
        </a>

        <a href="https://yigitaydemir.vercel.app/" target="blank">
          {" "}
          <button className="text-white text-3xl bg-red-400 w-44 h-12 rounded-md m-2 tracking-wider active:scale-95">
            Contact Me
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
