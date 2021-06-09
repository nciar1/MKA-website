import React from 'react'
import {ServiceContainer, ServiceIconWrapper, ServiceWrapper,ServiceLabel, ServiceHeader} from './ServicesElements'

const Services = () => {
    return (
        <div className='cream-bg' >
         <ServiceHeader>My Services</ServiceHeader>
        <ServiceContainer >
       

    
           <ServiceWrapper>
               <ServiceIconWrapper>Icon</ServiceIconWrapper>
           <ServiceLabel>Comissioned Art</ServiceLabel>
           </ServiceWrapper>

           <ServiceWrapper>
               <ServiceIconWrapper>Icon</ServiceIconWrapper>
           <ServiceLabel>Logo & Brand Design</ServiceLabel>
           </ServiceWrapper>

           <ServiceWrapper>
               <ServiceIconWrapper>Icon</ServiceIconWrapper>
           <ServiceLabel>Video Editing</ServiceLabel>
           </ServiceWrapper>
          
  
       
        </ServiceContainer>
        </div>
    )
}

export default Services
