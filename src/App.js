import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

// App Components
import Home from './components/Home.js'
import About from './components/About.js'
import Header from './components/Header.js'
import Teachers from './components/Teachers.js'
import Courses from './components/Courses.js'
import HTML from './components/courses/HTML'
import CSS from './components/courses/CSS'
import JavaScript from './components/courses/JavaScript'

const App = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="teachers" element={<Teachers />} />
        <Route path="courses" element={<Courses />}>
          <Route index element={<Navigate replace={true} to="html" />} />
          <Route path="html" element={<HTML />} />
          <Route path="css" element={<CSS />} />
          <Route path="javascript" element={<JavaScript />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
