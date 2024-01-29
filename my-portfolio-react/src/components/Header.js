import React from 'react'

function Header() {
  return (
   
<div className ="main">
        <nav id="navbar">
            <div className="logo">My Portfolio</div>
            <div>
             <ul className ="nav-links">
                <li><a href="#about">About Me</a></li>
                <li><a href="#skills">Technical skills</a></li>
                <li><a href="#portfolio">My projects</a></li>
                <li><a href="#contact">Contact Me</a></li>
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
                <li><a href="#about" onclick="toggleMenu()">About Me </a></li>
                <li><a href="#skills" onclick="toggleMenu()">Technical skills</a></li>
                <li><a href="#projects" onclick="toggleMenu()">My projects</a></li>
                <li><a href="#contact" onclick="toggleMenu()">Contact Me</a></li>
        </div>
    </div>

   </nav>
   </div>
  )
}

export default Header
