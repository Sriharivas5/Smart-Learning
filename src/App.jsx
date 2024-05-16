import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Csshome from './Pages/Home/Css/Csshome'
import Javascript from './Pages/Home/Javascript/Javascript'
import FlexIntro from './Pages/Home/Css/Flex/FlexIntro/FlexIntro'
import Flex from './Pages/Home/Css/Flex/Flex1/Flex'
import Flex2 from './Pages/Home/Css/Flex/Flex2/Flex2'
import Flex3 from './Pages/Home/Css/Flex/Flex3/Flex3'
import Flex4 from './Pages/Home/Css/Flex/Flex4/Flex4'
import Flex5 from './Pages/Home/Css/Flex/Flex5/Flex5'
import Flex6 from './Pages/Home/Css/Flex/Flex6/Flex6'
import Flex7 from './Pages/Home/Css/Flex/Flex7/Flex7'
import Flex8 from './Pages/Home/Css/Flex/Flex8/Flex8'
import Selectors from './Pages/Home/Css/Selectors/Selector1/Selectors'
import Selectors2 from './Pages/Home/Css/Selectors/Selectors2/Selectors2'
import Selectors3 from './Pages/Home/Css/Selectors/Selectors3/Selectors3'
import Selectors4 from './Pages/Home/Css/Selectors/Selectors4/Selectors4'
import Level1 from './Pages/Home/Javascript/Basics/Level1/Level1'
import Level2 from './Pages/Home/Javascript/Basics/Level2/Level2'
import Level3 from './Pages/Home/Javascript/Basics/Level3/Level3'

import Transform1 from './Pages/Home/Css/Transform/Transform1/Transform1'



const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/Smart-Learning' element={<Home/>} />
          <Route path='/Smart-Learning/Css' element={<Csshome/>} />
          <Route path='/Smart-Learning/Js' element={<Javascript/>} />
          <Route path='/Smart-Learning/Js/Basics/Level1' element={<Level1 />}/>
          <Route path='/Smart-Learning/Css/Flex/Flex1' element={<Flex/>} />
          <Route path='/Smart-Learning/Css/Flex/Flex2' element={<Flex2/>} />
          <Route path='/Smart-Learning/Css/Flex/Flex3' element={<Flex3/>} />
          <Route path='/Smart-Learning/Css/Flex/Flex4' element={<Flex4/>} />
          <Route path='/Smart-Learning/Css/Flex/Flex5' element={<Flex5/>} />
          <Route path='/Smart-Learning/Css/Flex/FlexIntro' element={<FlexIntro/>} />
          <Route path='/Smart-Learning/Css/Transform/Transform1' element ={<Transform1/>}/>
          <Route path='/Smart-Learning' element={<Home />} />
          <Route path='/Smart-Learning/Css' element={<Csshome />} />
          <Route path='/Smart-Learning/Js' element={<Javascript />} />
          <Route path='/Smart-Learning/Css/Flex/FlexIntro' element={<FlexIntro />} />
          <Route path='/Smart-Learning/Css/Flex/Flex1' element={<Flex />} />
          <Route path='/Smart-Learning/Css/Flex/Flex2' element={<Flex2 />} />
          <Route path='/Smart-Learning/Css/Flex/Flex3' element={<Flex3 />} />
          <Route path='/Smart-Learning/Css/Flex/Flex4' element={<Flex4 />} />
          <Route path='/Smart-Learning/Css/Flex/Flex5' element={<Flex5 />} />
          <Route path='/Smart-Learning/Css/Flex/Flex6' element={<Flex6 />} />
          <Route path='/Smart-Learning/Css/Flex/Flex7' element={<Flex7 />} />
          <Route path='/Smart-Learning/Css/Flex/Flex8' element={<Flex8 />} />
          <Route path='/Smart-Learning/Css/Selectors/Selectors1' element={<Selectors />} />
          <Route path='/Smart-Learning/Css/Selectors/Selectors2' element={<Selectors2 />} />
          <Route path='/Smart-Learning/Css/Selectors/Selectors3' element={<Selectors3 />} />
          <Route path='/Smart-Learning/Css/Selectors/Selectors4' element={<Selectors4 />} />

          <Route path='/Smart-Learning/Js/Basics/Level1' element={<Level1 />} />
          <Route path='/Smart-Learning/Js/Basics/Level2' element={<Level2 />} />
          <Route path='/Smart-Learning/Js/Basics/Level3' element={<Level3 />} />
          <Route path='/Smart-Learning/Css/Transform/Transform1' element={<Transform1 />} />

        </Routes> 
      </BrowserRouter>
    </div>
  )
}

export default App
