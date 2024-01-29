import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
   
<div className ="main">
        <nav id="navbar">
            <div className="logo">My Portfolio</div>
            <div>
             <ul className ="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="about">About Me</Link></li>
                <li><Link to="skills">Technical skills</Link></li>
                <li><Link to="portfolio">My projects</Link></li>
                <li><Link to="contact">Contact Me</Link></li>
                <li><Link to="ext_API">Jokes</Link></li>
            </ul>
            </div>
           </nav>

           <nav id = "hamburger-nav">
             <div className="logo">My Portfolio</div>
             <div className = "hamburger-menu">
             <div className="hamburger-icon" onclick="toggleMenu()">
                 <span></span>
                 <span></span>
                 <span></span>
            </div>
            <div className="menu-links">
                <li><Link to="#about" onclick="toggleMenu()">About Me </Link></li>
                <li><Link to="#skills" onclick="toggleMenu()">Technical skills</Link></li>
                <li><Link to="#projects" onclick="toggleMenu()">My projects</Link></li>
                <li><Link to="#contact" onclick="toggleMenu()">Contact Me</Link></li>
        </div>
    </div>

   </nav>
   </div>
  )
}

export default Header
