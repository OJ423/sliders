import { Route, Routes } from 'react-router-dom'
import './App.css'
import DailyGame from './components/DailyGame'
import FreePlay from './components/FreePlay'
import Stats from './components/Stats'
import Navigation from './components/Navigation'
import Help from './components/Help'
import { useEffect, useState } from 'react'


function App() {
  const [gameId, setGameId] = useState(0);
  const startDate = new Date('2024-03-06');
  const currentDate = new Date();
  const differenceInMilliseconds = currentDate - startDate;
  const gameDay = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

  useEffect(() => {
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
    </>
  )

}

export default App
