import React from 'react'
import Home from './components/Home'
import Create from './components/Create'
import Update from './components/Update'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/create' element={<Create />} />
        <Route path='/update' element={<Update />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App