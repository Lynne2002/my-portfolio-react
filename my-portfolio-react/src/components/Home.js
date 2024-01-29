import React from 'react'
import {Link} from 'react-router-dom'
import Typed_script from './Typed_script'

function Home() {
  return (
    <section className="home-section" id="profile">
    <div className="pic-container">
          <img src="./assets/prof.png" alt="My profile" />
    </div>
    <div className="text">
      <p className="text_p1">Hello, I am</p>
      <h1 className="title">Lynne Chebet</h1>
      <div className="text-3">And I'm a <span className="typing">
        </span>
        <Typed_script/>
    </div>
    <br/>
      <div className="btn-container">
        <button
          className="btn btn-color-2"
  
        >
          My CV
        </button>
        <Link to = "../contact"><button className="btn btn-color-1">
          My contacts </button></Link>
       
      </div>
    </div>
</section>
  )
}

export default Home
