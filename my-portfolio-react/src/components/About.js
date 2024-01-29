import React from 'react'

function About() {
  return (
    <section className="about-section" id="about">
  <div className="about-container">
    <div className="about-row">
      <div className="section-title">
        <h2>About Me</h2>
      </div>
    </div>
    <div className="about-row">
      <div className="about-img">
        <div className="img-box">
          <img src="https://tse1.mm.bing.net/th?id=OIP.L9I-prv4m64yRm3oxFzfWQHaHa&pid=Api&P=0" alt="about-img"/>
        </div>

      </div>
      <div className="about-text">
        <p>
          I am a young lady with a passion in web development. I love coding. My hobbies are singing, eating and taking walks.
           I'm also quite introverted, but can talk comfortably when around friends😊
        </p>
        <div className="about-tabs">
          <button type="button" className="tab-item active" data-target="#education">Education</button>
          <button type="button" className="tab-item" data-target="#experience">Experience</button>
        </div>
        
        <div className="tab-content active" id="education">
          <div className="timeline">
            <div className="timeline-item">
              <span className="date">2020-2024</span>
              <h4>Bachelor of Informatics and Computer Science - <span>Strathmore University</span> </h4>
              <p>Graduating in 2024<br/>Undergraduate degree</p>

            </div>
            <div className="timeline-item">
              <span className="date">Ongoing</span>
              <h4>Google Data Analytics <span>Coursera</span> </h4>
              <p>4 out of 8 Courses Completed<br/></p>

            </div>
            <div className="timeline-item">
              <span className="date">June 2021- December 2022</span>
              <h4>Google Project Management - <span>Coursera</span> </h4>
              <p>6 Courses Completed<br/><a
                  href="https://www.coursera.org/account/accomplishments/specialization/certificate/R3DEJAEBCWV9"
                  target="_blank">View Certificate</a></p>

            </div>
            <div className="timeline-item">
              <span className="date">2016-2019</span>
              <h4>High School Diploma - <span>Moi Tea Girls Secondary School</span> </h4>
              <p>Grade achieved: A- of 74 points <br/> Kenya Certificate of Secondary Education</p>

            </div>
            <div className="timeline-item">
              <span className="date">2007-2015</span>
              <h4>Primary School - <span>Kericho Primary School</span> </h4>
              <p>Grade achieved: A- of 394 marks<br/>Kenya Certificate of Primary Education</p>

            </div>
          </div>

        </div>
        <div className="tab-content" id="experience">
          <div className="timeline">
            <div className="timeline-item">
              <span className="date">March 2023 - Current </span>
              <h4>Developer - <span>Brink Innovation</span></h4>
              <p>Completed CHT app bulding course</p>
            </div>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <span className="date">January 2023 - March 2023</span>
              <h4>Intern - <span>Kenya Tea Packers Association</span></h4>
              <p>Worked on helpdesk support system and general hardware maintenance</p>
            </div>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <span className="date">Feb 2022- March 2022</span>
              <h4>Intern - <span>Bible Society of Kenya</span></h4>
              <p>Programmed audio Bibles for distribution to marginalized communities</p>
            </div>
          </div>
        </div>



      </div>
    </div>

  </div>

</section>

  )
}

export default About
