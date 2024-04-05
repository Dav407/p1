import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './component/pages/Home'
import About from './component/pages/About'
import Contact from './component/pages/Contact'
import Product from './component/pages/Product'
import Service from './component/pages/Service'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<Product />} />
          <Route path='/service' element={<Service />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

// import React from 'react'
// import Statetwo from './component/Statetwo'
// import State from './component/State'

// const App = () => {
//   return (
//     <>
//       <State />
//       <Statetwo />
//     </>
//   )
// }

// export default App