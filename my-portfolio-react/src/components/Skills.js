import React from 'react'
import {FaHtml5,FaCss3Alt, FaJs, FaBootstrap, FaPython, FaNode, FaJava, FaPhp, FaFigma } from "react-icons/fa";
function Skills() {
  return (

<section className="my_skills" id="skills">
  <div className="section-title">
    <h2>My skills</h2>
  </div>
  <div className="div-box">
    <div className="skills-content">
      <h3>Frontend</h3>
      <div className="ind-content">
        <span><i className="fa-brands fa-html5"><FaHtml5/> </i>  HTML</span>
        <span><i className="fa-brands fa-css3-alt"><FaCss3Alt/></i>CSS</span>
        <span><i className="fa-brands fa-js"><FaJs/></i>JavaScript</span>
        <span><i className="fa-brands fa-bootstrap"><FaBootstrap/></i>Bootstrap</span>
      </div>
    </div>
    <div className="skills-content">
      <h3>Backend</h3>
      <div className="ind-content">
        <span><i className="fa-brands fa-python"><FaPython/></i>Python</span>
        <span><i className="fa-brands fa-java"><FaJava/></i>Java</span>
        <span><i className="fa-brands fa-php"><FaPhp/></i>PHP</span>
        <span><i className="fa-brands fa-node"><FaNode/></i>Node</span>
      </div>
    </div>
    <div className="skills-content">
      <h3>UI/UX Design</h3>
      <div className="ind-content">
        <span><i className="fa-brands fa-figma"><FaFigma/></i>Figma</span>
      </div>
    </div>

  </div>
  <div className="about-skills">
    <div className="skill-item">
      <div className="skill-header">
        <h6 className="skill-title">Node</h6>
        <div className="skill-percentage">
          <p><span className="counter">20</span>%</p>
        </div>
      </div>
      <div className="skill-bar">
        <div className="bar-inner">
          <div className="progress-line" data-progress="20%"></div>
        </div>
      </div>
    </div>
    <div className="skill-item">
      <div className="skill-header">
        <h6 className="skill-title">Bootstrap</h6>
        <div className="skill-percentage">
          <p><span className="counter">30</span>%</p>
        </div>
      </div>
      <div className="skill-bar">
        <div className="bar-inner">
          <div className="progress-line" data-progress="30%"></div>
        </div>
      </div>
    </div>
    <div className="skill-item">
      <div className="skill-header">
        <h6 className="skill-title">Java</h6>
        <div className="skill-percentage">
          <p><span className="counter">30</span>%</p>
        </div>
      </div>
      <div className="skill-bar">
        <div className="bar-inner">
          <div className="progress-line" data-progress="30%"></div>
        </div>
      </div>
    </div>
    <div className="skill-item">
      <div className="skill-header">
        <h6 className="skill-title">JavaScript</h6>
        <div className="skill-percentage">
          <p><span className="counter">40</span>%</p>
        </div>
      </div>
      <div className="skill-bar">
        <div className="bar-inner">
          <div className="progress-line" data-progress="40%"></div>
        </div>
      </div>
    </div>
    <div className="skill-item">
      <div className="skill-header">
        <h6 className="skill-title">Figma</h6>
        <div className="skill-percentage">
          <p><span className="counter">40</span>%</p>
        </div>
      </div>
      <div className="skill-bar">
        <div className="bar-inner">
          <div className="progress-line" data-progress="40%"></div>
        </div>
      </div>
    </div>
    <div className="skill-item">
      <div className="skill-header">
        <h6 className="skill-title">Python</h6>
        <div className="skill-percentage">
          <p><span className="counter">50</span>%</p>
        </div>
      </div>
      <div className="skill-bar">
        <div className="bar-inner">
          <div className="progress-line" data-progress="50%"></div>
        </div>
      </div>
    </div>
    <div className="skill-item">
      <div className="skill-header">
        <h6 className="skill-title">CSS</h6>
        <div className="skill-percentage">
          <p><span className="counter">50</span>%</p>
        </div>
      </div>
      <div className="skill-bar">
        <div className="bar-inner">
          <div className="progress-line" data-progress="50%"></div>
        </div>
      </div>
    </div>
    <div className="skill-item">
      <div className="skill-header">
        <h6 className="skill-title">PHP</h6>
        <div className="skill-percentage">
          <p><span className="counter">50</span>%</p>
        </div>
      </div>
      <div className="skill-bar">
        <div className="bar-inner">
          <div className="progress-line" data-progress="50%"></div>
        </div>
      </div>
    </div>
    <div className="skill-item">
      <div className="skill-header">
        <h6 className="skill-title">HTML</h6>
        <div className="skill-percentage">
          <p><span className="counter">70</span>%</p>
        </div>
      </div>
      <div className="skill-bar">
        <div className="bar-inner">
          <div className="progress-line" data-progress="70%"></div>
        </div>
      </div>
    </div>
    
  </div>


</section>
  )
}

export default Skills
