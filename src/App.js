import React from 'react'
import { Route, Routes } from 'react-router-dom'

// App Components
import Home from './components/Home.js'
import About from './components/About.js'
import Header from './components/Header.js'
import Teachers from './components/Teachers.js'
import Courses from './components/Courses.js'

const App = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="teachers" element={<Teachers />} />
        <Route path="courses" element={<Courses />} />
      </Routes>
    </div>
  )
}

export default App
