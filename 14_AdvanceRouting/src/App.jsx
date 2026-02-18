import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Notfound from './pages/Notfound'
import Men from './pages/Men'
import Women from './pages/Women'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Home/>}></Route>
        <Route path = '/About' element = {<About/>}></Route>
        <Route path = '/Product' element = {<Product/>}></Route>
        <Route path='*' element = {<Notfound/>}></Route>
        <Route path='/Product/men' element = {<Men/>}></Route>
        <Route path='/Product/women' element = {<Women/>}></Route>
      </Routes>
    </div>
  )
}

export default App