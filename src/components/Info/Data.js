import '../../App.css'


export const AboutMe = {
  
   header:'About Me',
    subtitle:'Hello, I’m Marielle!',
    body:'I’m an aspiring artist and content creator based in Florida. I specialize in digital illustrations and video editing. When I’m not creating content, you can find me baking in my kitchen or dancing to my favorite k-pop songs. Check out some of my work below!',
    sectColor: 'falu-red-bg',
    bgColor: 'old-rose-bg',
    lightText: true,
    img: require('./../../images/Kloe-Headshot.png').default,
    alt: 'headshot',

    imgStart: false,
    

}

export const MyShop = {
  
 header:'My Shop',
     subtitle:'Suppport my work',
    body: 'Prints, stickers, and digital downloads made by MARILARTOON can be purchased at our shop. Personal commissioned work can also be purchased by request.',
    sectColor: 'white',
    bgColor: 'pale-pink-bg',
    lightText: false,
     img: require('./../../images/Kloe-sticker.png').default,
     alt: 'shop',
     link: '/Shop',
     page: 'Shop',
     imgStart: true,


 }
 
 

 export const ContactMe= {

    header:'Contact Me',
    subtitle:'If you’d like to work together or would like to make a request, send me a message. You can also find me on social media!',
    sectColor: 'pale-pink-bg',
    bgColor: 'pale-pink-bg',
    lightText: false,
    img: require('./../../images/MKIllustration.png').default,
    alt: 'self portrait',
     link: '/Contact',
     page: 'Message Me',
   

 }
 export const ErrorMessage = {
  
    header:'404 Error',
        subtitle:'Sorry!',
       body: 'Looks like this page does not exist. ',
        color: 'transparent',
        img: require('./../../images/error.gif').default,
        alt: 'error',
        link: '/',
        page: 'Return Home',
        imgStart: true,
   
    }