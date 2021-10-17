import React from 'react'
import emailjs from 'emailjs-com';
import { Input, Form, Message, TextWrapper, ImageWrapper, ContactContainer, FormArea, Label, SocialArea,SocialIconLink, SocialMediaWrap, ButtonArea} from './contactElements';
import {InputButton} from '../ButtonElements'

import { FaInstagram} from 'react-icons/fa';
import { SiTiktok} from 'react-icons/si';
import { AiOutlineYoutube} from 'react-icons/ai';



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
        
        

        </Form>

</FormArea>

<ButtonArea>
<InputButton type="submit" value="Send" required/>
</ButtonArea>

<SocialArea>
<SocialMediaWrap>
<SocialIconLink href = 'https://instagram.com/marilartoon?utm_medium=copy_link' target='_blank'>
    <FaInstagram />
    </SocialIconLink >
   
    <SocialIconLink href ='https://www.youtube.com/channel/UCs3RVIfILIW-P3TBbfE4_qg' target='_blank'>
    <AiOutlineYoutube />
    </SocialIconLink >

    <SocialIconLink  href ='https://www.tiktok.com/@marilartoon?_d=secCgYIASAHKAESMgowObsmdQMVfsqjI0lpgTvSHEy0v0iD7HbWr8lFGG0g%2FmxQ9Eh1AY6gujgotXEg3baMGgA%3D&_r=1&enable_clips=1&language=en&sec_uid=MS4wLjABAAAAEcFSmGCD0ms98WddtjRQRF9y4S1NIiSQAK3cWQc9NIzOhCYcrcYq42wrgoIVhVf7&sec_user_id=MS4wLjABAAAA4YYzvl1SWnYvQj5IX4XoXp8N2otf0gmuQ4y2z49d3Vc8jUV0ix2oqXtv524HCzqx&share_app_id=1233&share_author_id=6624893022046060545&share_link_id=E63FCEF3-D659-4683-BC28-6DAA0DE00507&source=h5_m&tt_from=sms&u_code=2jfaa85ge5f2f&user_id=62572854654828544&utm_campaign=client_share&utm_medium=ios&utm_source=sms' target='_blank'>
    <SiTiktok />
    </SocialIconLink >

    </SocialMediaWrap>

</SocialArea>





        </ContactContainer>
     </>
    )
   

}

export default Contact
