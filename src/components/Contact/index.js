import React from 'react'
import emailjs from 'emailjs-com';
import { contactContainer } from './contactElements';
import style from './../../App.css'
import { Section } from '../SectionElements';


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
        
<Section className='creme-bg'>

<h2>Contact Me</h2>
<bold>If you’d like to work together, feel free to send me a message. You can also find me on social media!</bold>
    <form className="contact-form" onSubmit={sendEmail}>
    <label>Name</label>
    <input type="text" name="name" />
    <label>Email</label>
    <input type="email" name="email" />
    <label>Subject</label>
    <input type="subject" name="subject" />

    <label>Message</label>
    <textarea name="message" />
    <input type="submit" value="Send" />
  </form>

  </Section>

    )
   

}

export default Contact
