import React from 'react'
import emailjs from 'emailjs-com';
import { contactContainer, Input, Form, Message } from './contactElements';
import style from './../../App.css'
import { Section } from '../SectionElements';
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
        </>
    )
   

}

export default Contact
