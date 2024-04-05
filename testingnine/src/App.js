import React from 'react'
import Main from './component/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage, { Home } from './pages/Home'


const App = () => {
return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App