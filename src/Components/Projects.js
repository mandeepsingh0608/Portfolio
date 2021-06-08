import React from 'react'
import {Card, Button} from 'react-bootstrap'
import './Project.css'
import './Style.css'
import corona from './images/corona.jpg'
import inventory from './images/inventory.png'
import atm from './images/atm.jpg'

function Projects() {
    return (
    <div className="background">
        <div className="projectContainer">
          {/* card-1 */}
       

           <div className="card">
           <img src={corona}/>
            <div className="content">
              <h3>Covid-19 Cases Tracking App</h3>
              <p>An application that displays current Coronavirus active cases according to Province/State and Country. Backend database operation handled using REST API.<hr></hr>
<strong>Technologies: Java (Streams, Lambda Expression) Spring Boot (Maven), IntelliJ Idea.</strong>
</p>
              <a href="https://github.com/mandeepsingh0608/Covid-19_TrackingApp" target="_blank"><Button>Go To Project</Button></a>
            </div>
           </div>         
        {/* card-2 */}
          
        <div className="card">
        
        <img style={{height:"160px"}} src={inventory}/>    
        <div className="content">
              <h3>Inventory Control System</h3>
              <p>An inventory storage system for the company along with the product comparison feature. User access and permissions have been controlled by using Spring Security. In this project, products can be added, deleted, updated, and searched with product name, and model. <hr></hr>
	<strong>Technologies:Java, Spring Boot, Maven, Hibernate, MySQL, IntelliJ </strong> 
</p>
              <a href="https://github.com/mandeepsingh0608/Inventory-Control-System-CompareOphone-" target="_blank"><Button>Go To Project</Button></a>
        </div>
            
           </div>  

            {/* card-3 */}



           <div className="card">
            <img  style={{height:"175px"}} src={atm}/>
            <div className="content">
              <h3>Simple Banking ATM App</h3>
              <p>Able to perform basic tasks like depositing, withdrawing money, balance checking, and checking transactions history. UserId and password credential validation applied.<hr></hr> 
<strong>Technologies: Java, SQL Server 2019, JBDC</strong>
</p>
              <a href="https://github.com/mandeepsingh0608/Banking-ATM-System" target="_blank"><Button>Go To Project</Button></a>
            </div>
           </div> 
             

        </div>
    
    </div>
    )
}

export default Projects
