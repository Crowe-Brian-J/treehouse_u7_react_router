import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { HTMLCourses, CSSCourses, JSCourses } from './data/courses.js'

// App Components
import Home from './components/Home.js'
import About from './components/About.js'
import Header from './components/Header.js'
import Teachers from './components/Teachers.js'
import Courses from './components/Courses.js'
import CourseContainer from './components/courses/CourseContainer.js'
import NotFound from './components/NotFound.js'

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
          <Route path="html" element={<CourseContainer data={HTMLCourses} />} />
          <Route path="css" element={<CourseContainer data={CSSCourses} />} />
          <Route
            path="javascript"
            element={<CourseContainer data={JSCourses} />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
