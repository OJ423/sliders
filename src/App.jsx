import { Route, Routes } from 'react-router-dom'
import './App.css'
import DailyGame from './components/DailyGame'
import FreePlay from './components/FreePlay'
import Stats from './components/Stats'
import Navigation from './components/Navigation'
import Help from './components/Help'
import { useEffect, useState } from 'react'
import Footer from './components/Footer'


function App() {
  const [gameId, setGameId] = useState(0);
  const startDate = new Date('2024-03-06');
  const currentDate = new Date();
  const differenceInMilliseconds = currentDate - startDate;
  const gameDay = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
  const storedScoreHistory = localStorage.getItem('scoreHistory');
  let scoreHistory = storedScoreHistory ? JSON.parse(storedScoreHistory) : null;
  useEffect(() => {
    if (!scoreHistory) {
      const emptyScores = [0,0,0,0,0,0]
      localStorage.setItem('scoreHistory', JSON.stringify(emptyScores))
    }
    setGameId((currentID) => currentID + gameDay +1);
  }, []);
  
  return (
    <>
    <Navigation/>
    <Routes>
      <Route path='/' element={<DailyGame gameId={gameId} gameDay={gameDay} />} />
      <Route path='/practice' element={<FreePlay/>} />
      <Route path='/stats' element={<Stats/>} />
      <Route path='/help' element={<Help/>} />
    </Routes>
    <Footer/>
    </>
  )

}

export default App
