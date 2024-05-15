import React from 'react'
import { Link } from 'react-router-dom'
import "./Csshome.css"
const Csshome = () => {
  return (
    <div className='cssHome'>
        <Link to='/Smart-Learning/Css/Flex/FlexIntro'><h1>Flex</h1></Link>
        <Link to='/Smart-Learning/Css/Transform/Transform1'><h1>Transform</h1></Link>
        <Link to='/Smart-Learning/Css/Selectors/Selectors1'><h1>Selectors</h1></Link>

    </div>
  )
}

export default Csshome
