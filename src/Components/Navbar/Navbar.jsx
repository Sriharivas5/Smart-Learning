import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='navbar'>
            <ul class="multilevel-dropdown-menu">
            <li class="parent"><Link to='/Smart-Learning/'><h2 id='head'>Home</h2></Link></li>
                <li class="parent"><h2 id='head'>CSS</h2>
                    <ul class="child">
                        <Link to='/Smart-Learning/Css'><li>Css Home</li></Link>
                        <Link to='/Smart-Learning/Css/Flex/FlexIntro'><li>Flex</li></Link>
                        <Link><li>Transform</li></Link>
                        <Link  to='/Smart-Learning/Css/Selectors/SelectorsIntro'><li>Selectors</li></Link>
                        {/* <Link><li>Box Model</li></Link> */}
                        {/* <Link><li>Fonts</li></Link> */}
                        <Link><li>Position</li></Link>
                        <Link><li>Grid</li></Link>
                        <Link><li>Pseudo-Class</li></Link>
                        <Link><li>Pseudo-Element</li></Link>
                    </ul>
                </li>
                <li class="parent"><h2 id='head'>Javascript</h2>
                    <ul class="child">
                        <Link to='/Smart-Learning/Js'><li>Javascript</li></Link>
                        <Link><li>Transform</li></Link>
                        <Link><li>Selectors</li></Link>
                        <Link><li>Box Model</li></Link>
                        <Link><li>Fonts</li></Link>
                        <Link><li>Position</li></Link>
                        <Link><li>Grid</li></Link>
                        <Link><li>Pseudo-Class</li></Link>
                        <Link><li>Pseudo-Element</li></Link>
                    </ul>
                </li>
                <li class="parent"><h2 id='head'>React-js   </h2>
                    <ul class="child">
                        <Link><li>Flex</li></Link>
                        <Link><li>Transform</li></Link>
                        <Link><li>Selectors</li></Link>
                        <Link><li>Box Model</li></Link>
                        <Link><li>Fonts</li></Link>
                        <Link><li>Position</li></Link>
                        <Link><li>Grid</li></Link>
                        <Link><li>Pseudo-Class</li></Link>
                        <Link><li>Pseudo-Element</li></Link>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
