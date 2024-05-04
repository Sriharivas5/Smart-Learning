import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <Link to='/Smart-Learning/Css'><h1>css</h1></Link>
      <Link to='/Smart-Learning/js'><h1>js</h1></Link>
      <h1>react</h1>
    </div>
  )
}

export default Home
