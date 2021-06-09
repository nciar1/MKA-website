import React from 'react'
import emailjs from 'emailjs-com';
import { Input, Form, Message, TextWrapper, ImageWrapper, ContactContainer, FormArea} from './contactElements';
import {InputButton} from '../ButtonElements'

import headshot from './../../images/kloe-portrait.png'


const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_r2fujmx', 'template_5xpc67r', e.target, 'user_tJYVE2Kna8XurnEk6b2ab')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    
          e.target.reset();
      }

    return (
    <>
    
    <ContactContainer>

    <TextWrapper>
        <h1>Contact Me</h1>
        <p>If you’d like to work together, feel free to contact me at marilartoon@gmail.com. You can also find me on social media!</p>
    </TextWrapper>

    <ImageWrapper>
        <img src ={headshot} alt='headshot' width="200px"/>
    </ImageWrapper>

<FormArea>

        <Form className="contact-form" onSubmit={sendEmail}>
        
        <label>Name</label>
        <Input type="text" name="name" />
        
        <label>Email</label>
        <Input type="email" name="email" />
    
        <label>Subject</label>
        <Input type="subject" name="subject" />

        <label>Message</label>
        <Message name="message" />
        
        <InputButton type="submit" value="Send" />

        </Form>

</FormArea>





        </ContactContainer>
     </>
    )
   

}

export default Contact
