import { Button } from 'bootstrap'
import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './Contact.css'
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Contact() {

  const sendEmail=(e)=>{
    e.preventDefault();
    console.log("email called");
    emailjs.sendForm('service_6oo6jgx','template_vmk147g', e.target, 'user_NEjpAiXWd4mnt5qNTKLEN')
      .then((result) => {
           toast.success("Email has been sent Successfully !!",{position: toast.POSITION.TOP_CENTER});
          console.log(result);
      }, (error) => {
        toast.error("Error occurr while sending emial !!",{position: toast.POSITION.TOP_CENTER});
          console.log(error);
      });
      e.target.reset()

  }






  return (
        <div className="background">
        <div className="contactContainer">
         

         
          <h2>Contact Me</h2>
           
           <Container className="gridContainer">
           <Row>
             <Col xs lg="2">Phone:</Col>
             <Col>902-978-0274</Col>
          </Row>
           <Row>
             <Col xs lg="2">Email:</Col>
             <Col><a href="mailto:mandeepsingh0608@gmail.com">mandeepsingh0608@gmail.com</a></Col>
          </Row>
          <Row>
             <Col xs lg="2">LinkedIn:</Col>
             <Col><a href="https://www.linkedin.com/in/mandeepsingh06" target="_blank">www.linkedin.com/in/mandeepsingh06</a></Col>
          </Row>
         
         <hr></hr> 
         
          
         
            <div className="formContainer">
            <ToastContainer/>
             <form onSubmit={sendEmail}>
                <label  for="name">Name: </label>
                  <input
                    style={{height:"35px"}}
                    className="inputBox" type="text"        
                    name="name"
                    placeholder="Enter Your Name"></input>
                   <label for="email">Email: </label>
                   <input 
                    style={{height:"35px"}}
                    className="inputBox" type="email"         
                    name="user_email"
                    placeholder="Enter Your Email"></input>
           
             
                    <label for="message">Message:</label>
                    <textarea className="inputBox"        name="message"
                      rows="10" cols="45"
                      maxlength="3000"
                      placeholder="Enter message"
                    ></textarea>
            
                    <div className="sendButton">
                     <button type="submit" value="Send">Send Message</button>
        </div>
             </form>
         
            
          </div>

         


            </Container>
            
        </div>
            
        </div>
    )
}

export default Contact
