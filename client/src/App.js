import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './pages/Home'
import axios from 'axios'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
