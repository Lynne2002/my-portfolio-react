import React from 'react'

function Projects() {
  return (
    <section className="portfolio-section sec-padding" id="portfolio">
    <div className="about-container">
        <div className="about-row">
            <div className="section-title">
              <h2>Recent Work</h2>
            </div>
        </div>
        <div className="about-row">
        
           
            <div className="portfolio-item">
                <div className="portfolio-item-thumbnail">
                    <img  src="assets/upload3.png" alt="portfolio-item-thumbnail"/>
                </div>
                <h3 className="portfolio-item-title">Hotel Website</h3>
               
                
            </div>
             
            <div className="portfolio-item">
                <div className="portfolio-item-thumbnail">
                    <img src="./assets/upload6.png" alt="portfolio item thumb"/>
                </div>
                <h3 className="portfolio-item-title">Shoe Website</h3>
                
                
            </div>
            
            <div className="portfolio-item">
                <div className="portfolio-item-thumbnail">
                    <img src="./assets/upload1.png" alt="portfolio item thumb"/>
                </div>
                <h3 className="portfolio-item-title">Real Estate Website</h3> 
            </div>
             
            <div className="portfolio-item">
                <div className="portfolio-item-thumbnail">
                    <img src="./assets/upload4.png" alt="portfolio item thumb"/>
                </div>
                <h3 className="portfolio-item-title">Akan Name Generator</h3>
            </div>
             
        
            <div className="portfolio-item">
                <div className="portfolio-item-thumbnail">
                    <img src="./assets/upload5.png" alt="portfolio item thumb"/>
                </div>
                <h3 className="portfolio-item-title">Crime Reporting Website</h3>
            </div>
          
        </div>
    </div>
  
  </section>
  )
}

export default Projects
