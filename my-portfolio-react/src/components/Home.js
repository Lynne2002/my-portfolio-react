import React from 'react'

function Home() {
  return (
    <section class="home-section" id="profile">
    <div class="pic-container">
          <img src="./assets/prof.png" alt="My profile" />
    </div>
    <div class="text">
      <p class="text_p1">Hello, I am</p>
      <h1 class="title">Lynne Chebet</h1>
      <div class="text-3">And I'm a 
        <span class="typing">
        </span>
    </div>
    <br/>
      <div class="btn-container">
        <button
          class="btn btn-color-2"
          onclick="window.open('./assets/my_CV.pdf')"
        >
          My CV
        </button>
        <button class="btn btn-color-1" onclick="location.href='#contact'">
          My contacts
        </button>
      </div>
    </div>
</section>
  )
}

export default Home
