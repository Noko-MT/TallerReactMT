import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Wizard from './Pages/Wizard'
import Resumen from './Pages/Resumen'
import Salida from './Pages/Salida'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wizard />} />
        <Route path="/resumen" element={<Resumen />} />
        <Route path="/salida" element={<Salida />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
