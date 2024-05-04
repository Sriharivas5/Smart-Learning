import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Csshome from './Pages/Home/Css/Csshome'
import Javascript from './Pages/Home/Javascript/Javascript'
import Flex from './Pages/Home/Css/Flex/Flex'

const App = () => {
  return (
    <div className='app'>      
      <BrowserRouter>
        <Routes>
          <Route path='/Smart-Learning' element={<Home/>} />
          <Route path='/Smart-Learning/Css' element={<Csshome/>} />
          <Route path='/Smart-Learning/Js' element={<Javascript/>} />
          <Route path='/Smart-Learning/Css/Flex' element={<Flex/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
