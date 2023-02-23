import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ParkDetails from './components/ParkDetails'
import About from './components/About'
import Nav from './components/Nav'
import PostForm from './components/PostForm'

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
