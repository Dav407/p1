import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ProjectPage from './pages/ProjectPage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/project' element={<ProjectPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App