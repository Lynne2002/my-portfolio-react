import React from 'react'

function Home() {
  return (
    <section className="home-section" id="profile">
    <div className="pic-container">
          <img src="./assets/prof.png" alt="My profile" />
    </div>
    <div className="text">
      <p className="text_p1">Hello, I am</p>
      <h1 className="title">Lynne Chebet</h1>
      <div className="text-3">And I'm a 
        <span className="typing">
        </span>
    </div>
    <br/>
      <div className="btn-container">
        <button
          className="btn btn-color-2"
          onclick="window.open('./assets/my_CV.pdf')"
        >
          My CV
        </button>
        <button className="btn btn-color-1" onclick="location.href='#contact'">
          My contacts
        </button>
      </div>
    </div>
</section>
  )
}

export default Home
