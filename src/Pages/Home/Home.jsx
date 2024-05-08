import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
const Home = () => {
  return (
    <div className='home'>
      <div className="hero">
        <h1>Smart Learning</h1>
        <h2>Unlock Your Coding Potential with Exciting Games!</h2>
        <h3>Dive into a world where coding skills grow as you conquer each fun-packed level.</h3>
      </div>

      <div className="websiteIntro">
        <h1>What you can do in this website ?</h1>
      </div>

      <div className="css">
        <h2>Level Up Your CSS  Skills Through Play! </h2>
        <h3>Level up your skills through interactive gaming. Dive into CSS  challenges today</h3>
        <Link to='/Smart-Learning/Css'><button>Start the Css Adventure! </button></Link>
      </div>
      <div className="js">
        <h2>JavaScript Playground: Your Gateway to Mastery! </h2>
        <h3>Empower Your Skills: Conquer JavaScript Challenges! Unleash Your Coding Potential and Rise Above!</h3>
        <Link to='/Smart-Learning/js'><button>Ready to Play with js !</button></Link>
      </div>
      <div className="reactJs">
        <h2>React JS Revolution: Transform Your Skills with Interactive Learning!</h2>
        <h3>Dive into Dynamic Components, Master State Management, and Innovate Your Projects! Elevate Your Development Journey and Lead the Evolution of Web Apps!</h3>
        <Link to='/Smart-Learning/Css'><button>Start Exploring React js !</button></Link>
      </div>
      {/* <h1>css</h1> */}
      {/* <Link to='/Smart-Learning/js'><h1>js</h1></Link> */}
      {/* <h1>react</h1> */}
    </div>
  )
}

export default Home
