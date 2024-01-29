import React from 'react'

function Contact() {
  return (
    <section className="contact-section" id="contact">
  <div className="about-container">
    <div className="about-row">
      <div className="section-title">
        <h2>Contact Me</h2>
      </div>
    </div>
    <div className="about-row">
      <div className="contact-form">
        <form action="https://formspree.io/f/mjvlpkpg" method="POST">
          <div className="about-row">
            <div className="input-group">
              <input type="text" name="Name" placeholder="Name" className="input-control" required/>
            </div>
            <div className="input-group">
              <input type="text" name="Email" placeholder="Email" className="input-control" required/>
            </div>
            <div className="input-group">
              <input type="text" name="Subject" placeholder="Subject" className="input-control" required/>
            </div>
            <div className="input-group">
              <textarea placeholder="Message" name="Message" className="input-control" required></textarea>
            </div>
            <br/>
            <div className="submit-btn">
              <button type="submit" className="btn btn-color-1">Send Message</button>
            </div>
          </div>
        </form>
        <br/> <br/>
      </div>
     
      <div className="contact-info">
        <div className="contact-info-item">
          <h3>Email</h3>
          <p>lynnebebet2@gmail.com</p>
        </div>
        <div className="contact-info-item">
          <h3>Phone</h3>
          <p>0701 000 001</p>
        </div>
        <div className="contact-info-item">
          <h3>Digital Profiles</h3>
          <div className="social-links">
            <a href="#" target="_blank"><i className="fab fa-linkedin"></i></a>
            <a href="#" target="_blank"><i className="fab fa-github"></i></a>
            <a href="#" target="_blank"><i className="fab fa-hackerrank"></i></a>


          </div>
        </div>
      </div>
    </div>
  </div>

</section>
  )
}

export default Contact
