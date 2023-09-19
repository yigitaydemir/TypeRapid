import "./App.css"
import Home from "./pages/Home"
import About from "./pages/About"
import Leaderboard from "./pages/Leaderboard"
import Game from "./pages/Game"
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <div className="bg-slate-300 h-[100vh] flex justify-center items-center overflow-hidden">
      <div className="bg-[url('./media/bg.gif')] bg-no-repeat bg-center bg-cover h-5/6 w-11/12 max-w-screen-xl rounded-xl shadow-2xl">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/play" element={<Game></Game>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/leaderboard" element={<Leaderboard></Leaderboard>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App