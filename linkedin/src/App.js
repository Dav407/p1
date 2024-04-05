import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Main/Home'
import Business from './Main/Business'
import Jobs from './Main/Jobs'
import Me from './Main/Me'
import Messaging from './Main/Messaging'
import Network from './Main/Network'
import Notification from './Main/Notification'
import Premium from './Main/Premium'

const App = () => {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={< Home/>} />
          <Route path='/business' element={< Business/>} />
          <Route path='/jobs' element={< Jobs/>} />
          <Route path='/me' element={< Me/>} />
          <Route path='/messaging' element={< Messaging/>} />
          <Route path='/network' element={< Network/>} />
          <Route path='/notification' element={< Notification/>} />
          <Route path='/premium' element={< Premium/>} />
        </Routes>
       </BrowserRouter>
    </>
  )
}

export default App