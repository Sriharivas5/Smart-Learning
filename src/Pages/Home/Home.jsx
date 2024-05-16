import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import ScrollButton from '../../Components/ScrollToTop/ScrollToTop'
const Home = () => {
  return (
    <div className='home'>
      <div className="hero">
        <h1>Smart Learning</h1>
        <h2>Unlock Your Coding Potential with Exciting Games!</h2>
        <h3>Dive into a world where coding skills grow as you conquer each fun-packed level.</h3>
      </div>

      <div className="websiteIntro">
        <div>
          <h1>Welcome to Smart Learning</h1>
          <h4>Unlock the joy of learning web development through an exciting, game-based approach with CodeFun! Whether you're a beginner eager to dive into the world of HTML, CSS, and JavaScript, or someone looking to refresh your skills in a fun way, you've come to the right place.</h4>
        </div>

        <div>
          <h2>What is Smart Learning ?</h2>
          <h4>
            CodeFun is an interactive platform designed to make your learning experience engaging and enjoyable. We believe that mastering web development doesn't have to be tedious. Instead, it can be an adventure filled with challenges and triumphs!
          </h4>
        </div>
        
        <div>
          <h2>What Can You Do Here ?</h2>

          <h4>	&#8594;
            Learn by Playing: Jump into a series of games that teach you coding from the ground up. Each game focuses on a core concept of web development, turning complex lessons into simple, entertaining experiences.

          </h4>
          <br />
          <h4>	&#8594;
             Build as You Go: As you progress through our games, you’ll not only learn the theory but also apply it by building projects. From simple web pages to more complex layouts, watch your code come to life as you play!
          </h4>


        </div>
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
     <ScrollButton/>
    </div>
  )
}

export default Home
