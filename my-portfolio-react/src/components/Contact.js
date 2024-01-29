import React from 'react'

function Contact() {
  return (
    <section class="contact-section" id="contact">
  <div class="about-container">
    <div class="about-row">
      <div class="section-title">
        <h2>Contact Me</h2>
      </div>
    </div>
    <div class="about-row">
      <div class="contact-form">
        <form action="https://formspree.io/f/mjvlpkpg" method="POST">
          <div class="about-row">
            <div class="input-group">
              <input type="text" name="Name" placeholder="Name" class="input-control" required/>
            </div>
            <div class="input-group">
              <input type="text" name="Email" placeholder="Email" class="input-control" required/>
            </div>
            <div class="input-group">
              <input type="text" name="Subject" placeholder="Subject" class="input-control" required/>
            </div>
            <div class="input-group">
              <textarea placeholder="Message" name="Message" class="input-control" required></textarea>
            </div>
            <br/>
            <div class="submit-btn">
              <button type="submit" class="btn btn-color-1">Send Message</button>
            </div>
          </div>
        </form>
        <br/> <br/>
      </div>
     
      <div class="contact-info">
        <div class="contact-info-item">
          <h3>Email</h3>
          <p>lynnebebet2@gmail.com</p>
        </div>
        <div class="contact-info-item">
          <h3>Phone</h3>
          <p>0701 000 001</p>
        </div>
        <div class="contact-info-item">
          <h3>Digital Profiles</h3>
          <div class="social-links">
            <a href="#" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="#" target="_blank"><i class="fab fa-github"></i></a>
            <a href="#" target="_blank"><i class="fab fa-hackerrank"></i></a>


          </div>
        </div>
      </div>
    </div>
  </div>

</section>
  )
}

export default Contact
