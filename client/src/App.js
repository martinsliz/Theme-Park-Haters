import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Home from './Pages/Home'
import ParkDetails from './Components/ParkDetails'
import About from './Components/About'
import Nav from './Components/Nav'
import PostForm from './Components/PostForm'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/parks/:id" element={<ParkDetails />} />
        <Route path="/park/:id/post" element={<PostForm />} />
      </Routes>
    </div>
  )
}

export default App
