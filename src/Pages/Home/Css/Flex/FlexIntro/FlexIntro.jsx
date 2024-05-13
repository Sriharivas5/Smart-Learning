import React from 'react'
import { Link } from 'react-router-dom'
import './FlexIntro.css'
const FlexIntro = () => {
  return (
    <div className="flexIntro">
      <div className="flexIntroHeader">
        <h1>What is FlexBox</h1>
        <h4>Flexbox model was designed as one dimensional layout model and we can arrange items using flexbox in any one dimension either X or Y
          <br />
          By using flexbox model we can create any website .
        </h4>
        <Link to='/Smart-Learning/Css/Flex/Flex1'><button id='flexStart'>Start</button></Link>
      </div>
    </div>
  )
}

export default FlexIntro
