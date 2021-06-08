import React from 'react'
import './Style.css'
import './Home.css'
import Homeimg from './images/Homeimg.jpg'
function Home() {
   
  return (
        <div className="homebackground background ">
          <div className="homeContainer">
             <h2>About Me</h2>
            <p>I graduated in a Bachelor of computer applications at Guru Nanak Dev University, India, and I have completed my second degree in Computer network and technical support at Seneca College, Toronto, Canada with additional web development subjects. In addition, recently I have accomplished certification in fundamentals of scrum master.
            <hr></hr>
            <p><strong>Skill Set: Java, JavaScript, React, SpringBoot, HTML, CSS</strong></p>
            <hr></hr>
            </p>
            
           <div className="linkStyle">
           <div>
           <a href="https://www.linkedin.com/in/mandeepsingh06"  target="_blank"><i class="fab fa-linkedin fa-2x "></i>  </a>
           </div>
            <div>
            <a href="https://github.com/mandeepsingh0608" target="_blank" ><i class="fab fa-github fa-2x "></i> </a>
            </div>
             <div>
             <a href="mailto:mandeepsingh0608@gmail.com" target="_blank" ><i class="fas fa-envelope fa-2x"></i></a>
             </div>
            
           
           
           
           </div>


          </div>
         
         
         
        </div>
    );
}

export default Home
