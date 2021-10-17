import React from 'react'
import emailjs from 'emailjs-com';
import { Input, Form, Message, TextWrapper, ImageWrapper, ContactContainer, FormArea, Label} from './contactElements';
import {InputButton} from '../ButtonElements'



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




<FormArea>

        <Form className="contact-form" onSubmit={sendEmail}>
        
        <Label >Name</Label>
        <Input type="text" name="name" required/>
        
        <Label >Email</Label>
        <Input type="email" name="email" required/>
    
        <Label>Subject</Label>
        <Input type="subject" name="subject" required/>

        <Label>Message</Label>
        <Message name="message" required/>
        
        <InputButton type="submit" value="Send" required/>

        </Form>

</FormArea>





        </ContactContainer>
     </>
    )
   

}

export default Contact
