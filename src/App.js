import React from 'react'
import { Route, Routes } from 'react-router-dom'

// App Components
import Home from './components/Home.js'
import About from './components/About.js'

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
