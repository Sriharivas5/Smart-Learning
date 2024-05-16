import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <ul class="multilevel-dropdown-menu">
                <li class="parent"><a href="#">CSS</a>
                    <ul class="child">
                        <li></li>
                    </ul>
                </li>
                <li class="parent"><a href="#">Javascript</a>
                    <ul class="child">
                        <li class="parent"><a href="#">Video Games <span class="expand"></span></a> </li>
                        <li><a href="#">Barbies</a></li>
                        <li><a href="#">Teddy Bear</a></li>
                    </ul>
                </li>
                <li class="parent"><a href="#">React-js</a>
                    <ul class="child">
                        <li class="parent"><a href="#">Video Games <span class="expand"></span></a> </li>
                        <li><a href="#">Barbies</a></li>
                        <li><a href="#">Teddy Bear</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
