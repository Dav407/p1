import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// pages
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Products from './pages/Products'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
    <h1><Navbar /></h1>         
      <Routes>
        <Route path='/' element={<Home />} >
          
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App