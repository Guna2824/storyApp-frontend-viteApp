import React from 'react'
import ColourTherapy from './ColourTherapy'
import { Route, Routes } from 'react-router-dom'
import Game from './Game'
import Home from './Home'
import TnpscHome from './tnpsc/TnpscHome'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/color' element={<ColourTherapy />} />
      <Route path='/game' element={<Game />} />
      <Route path='/tnpsc' element={<TnpscHome />} />
    </Routes>
  )
}

export default App