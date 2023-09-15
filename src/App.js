import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Game from './pages/Game';
import Leaderboard from "./pages/Leaderboard"
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='bg-gray-900 text-white'>
      <Nav></Nav>
      

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/play' element={<Game></Game>}></Route>
        <Route path='/leaderboard' element={<Leaderboard></Leaderboard>}></Route>
      </Routes>
    </div>
  );
}

export default App;