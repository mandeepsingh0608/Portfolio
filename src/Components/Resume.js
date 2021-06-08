import React from 'react'
import './Style.css'
import './ResponsiveCSS/Resume.css'
import { Preview, print } from 'react-html2pdf'
import jsPDF from 'jspdf'
import Mandeep_singh_Resume from './images/Mandeep_singh_Resume.pdf'
import styled from 'styled-components'
import { renderToString } from '@react-pdf/renderer'
// import { Preview, print } from 'react-html2pdf'
function Resume() {
    
    const printing =()=>{
      
    } 
     
    // const downloading=()=>{
    //    const string= renderToString('#resume');
    //     const doc=new jsPDF();
    //     doc.fromH
    
  
  

    // }

  

    return (
        <div className="background">
           
         <div className="resumeContainer">
          
          <div className="download-Print">
          <button id="download" ><i  class="fas fa-download"/> <a style={{textDecoration:"none", color:"white"}} href={Mandeep_singh_Resume} download="resume">Download</a> </button>
         
          </div>
         
         
         
         
         
         {/*Resume Starts  */}
         
         <div id='resume' >

        
          <header >
              <h1>Mandeep Singh</h1>
              <h4>11 McLeod Crescent, Leduc, Alberta</h4>
              <h4>Phone: (902)-978-0274</h4>
          </header>

          {/* -------------Header ends------------------------- */}
          <div className="mylinks">
            <a href="mailto:mandeepsingh0608@gmail.com">mandeepsingh0608@gmail.com</a>
            <a href="https://github.com/mandeepsingh0608">https://github.com/mandeepsingh0608</a>

          </div>


          <hr className="hrLine"></hr>
{/* ------------------- links end ----------------------------------*/}

<div>
    <h3>Technical Skills</h3>
    <ul>
        <li>Programming Languages: Java, , JavaScript, React, HTML, CSS. </li>
        <li>Database: MySQL, Microsoft SQL server. </li>
        <li>Spring Boot, Maven, IntelliJ IDEA and Eclipse, Visual Studio Code, GIT/GitHub, LINUX, UNIX, Windows Operating System.</li>
        <li>Scrum fundamentals, and knowledge of SDLC (Software Development Life Cycle).</li>
        <li>Advanced knowledge of  TCP/IP, UDP, HTTP, FTP, Telnet protocols for programming purposes. </li>
        
    </ul>
</div>
{/* -----------------------Technical Skills ends---------------------- */}


<div>
    <h3>Soft Skills</h3>
    <ul>
    <li>Excellent Communication, Critical Thinking, Problem Solving, Quick learner, and passion to learn new technology.</li>
    <li>Team player, Accountable, Creative and curious, Determined and Goal Oriented, Humble, Time Management
</li>

</ul>
    
</div>
{/* -----------------------Soft Skills ends---------------------*/}

<div>
    <h3>Experience/Projects</h3>
    <ul>
        <li><strong style={{fontSize:"18px"}}>Covid-19 Cases Tracking web Application:</strong>  Developed an application that displays current Coronavirus active cases according to Province/State and Country. Backend database operation handled using REST API.</li>
       <ul>
           <li>
           Technologies: Java (Streams, Lambda Expression) Spring Boot (Maven), IntelliJ Idea.
           </li>
       </ul>
        
    </ul>

    <ul>
        <li><strong style={{fontSize:"18px"}}>Inventory Control System:</strong>Developed an inventory storage system for the company along with the product comparison feature. User access and permissions have been controlled by using Spring Security. In this project, products can be added, deleted, updated, and searched with product name, and model. </li>
       <ul>
           <li>
            Technologies: Java, Spring Boot, Maven, Hibernate, MySQL, IntelliJ .
           </li>
       </ul>
        
    </ul>

    <ul>
        <li><strong style={{fontSize:"18px"}}>Simple Banking ATM App:</strong>Able to perform basic tasks like depositing, withdrawing money, balance checking, and checking transactions history. UserId and password credential validation applied. 

</li>
       <ul>
           <li>
           Technologies: Java, SQL Server 2019, JBDC
           </li>
       </ul>
        
    </ul>
    
</div>
{/* -----------------------Project/Experience ends---------------------*/}

<div>
    <h3>Education/Certifications</h3>
    <ul>
        <li><strong style={{fontSize:"18px"}}>Certification in Scrum Fundamental</strong></li>                                          
         <h6>Certification from Scrum Study, Canada</h6>

        <li><strong style={{fontSize:"18px"}}>Bachelor of Computer Applications (BCA)</strong></li>                                          
         <h6> Guru Nanak Dev University, Punjab, India</h6>

        <li><strong style={{fontSize:"18px"}}>Computer Networking and Technical Supports</strong></li>                                          
         <h6>Seneca College- Toronto, Ontario, Canada</h6>
       
        
    </ul>
    
</div>
{/* -----------------------Education Ends---------------------*/}


</div>

{/* Resume Ends */}



         </div>
       
        </div>
    )
}

export default Resume
