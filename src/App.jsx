import React from 'react'
import ColourTherapy from './ColourTherapy'
import { Route, Routes } from 'react-router-dom'
import Game from './Game'
import Home from './Home'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/color' element={<ColourTherapy />} />
      <Route path='/game' element={<Game />} />
    </Routes>
  )
}

export default App