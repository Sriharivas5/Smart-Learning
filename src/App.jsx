import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Csshome from './Pages/Home/Css/Csshome'
import Javascript from './Pages/Home/Javascript/Javascript'
import Flex from './Pages/Home/Css/Flex/Flex1/Flex'
import Flex2 from './Pages/Home/Css/Flex/Flex2/Flex2'
import Flex3 from './Pages/Home/Css/Flex/Flex3/Flex3'
import Flex4 from './Pages/Home/Css/Flex/Flex4/Flex4'
import Flex5 from './Pages/Home/Css/Flex/Flex5/Flex5'
import FlexIntro from './Pages/Home/Css/Flex/FlexIntro/FlexIntro'

const App = () => {
  return (
    <div className='app'>      
      <BrowserRouter>
        <Routes>
          <Route path='/Smart-Learning' element={<Home/>} />
          <Route path='/Smart-Learning/Css' element={<Csshome/>} />
          <Route path='/Smart-Learning/Js' element={<Javascript/>} />
          <Route path='/Smart-Learning/Css/Flex/Flex1' element={<Flex/>} />
          <Route path='/Smart-Learning/Css/Flex/Flex2' element={<Flex2/>} />
          <Route path='/Smart-Learning/Css/Flex/Flex3' element={<Flex3/>} />
          <Route path='/Smart-Learning/Css/Flex/Flex4' element={<Flex4/>} />
          <Route path='/Smart-Learning/Css/Flex/Flex5' element={<Flex5/>} />
          <Route path='/Smart-Learning/Css/Flex/FlexIntro' element={<FlexIntro/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
