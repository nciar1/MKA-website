import React from 'react'
import {ServiceContainer, ServiceIconWrapper, ServiceWrapper,ServiceLabel, ServiceHeader, ServiceIcon} from './ServicesElements'


const Services = () => {
    return (
        <div className='falu-red-bg' >
        <ServiceHeader>My Services</ServiceHeader>
            <ServiceContainer>
                
                <ServiceWrapper>
                    <ServiceIconWrapper>
                        <lord-icon
                            src="https://cdn.lordicon.com/fgkmrslx.json"
                            trigger="loop-on-hover"
                            colors="primary:#2f0708,secondary:#862325"
                            style={{width:'100%',height:'100%'}}
                            alt='art-icon'>
                        </lord-icon>
                    </ServiceIconWrapper>
                <ServiceLabel>Comissioned Art</ServiceLabel>
                </ServiceWrapper>

                <ServiceWrapper>
                    <ServiceIconWrapper>
                        <lord-icon
                            src="https://cdn.lordicon.com/wloilxuq.json"
                            trigger="loop-on-hover"
                            colors="primary:#2f0708,secondary:#862325"
                            style={{width:'100%',height:'100%'}}>
                        </lord-icon>
                    </ServiceIconWrapper>
                <ServiceLabel>Logo & Brand Design</ServiceLabel>
                </ServiceWrapper>

                <ServiceWrapper>
                    <ServiceIconWrapper>
                        <lord-icon
                            src="https://cdn.lordicon.com/tdxypxgp.json"
                            trigger="loop-on-hover"
                            colors="primary:#2f0708,secondary:#862325"
                            style={{width:'100%',height:'100%'}}>
                        </lord-icon>
                    </ServiceIconWrapper>
                <ServiceLabel>Video Editing</ServiceLabel>
                </ServiceWrapper>
                
        </ServiceContainer>
        </div>
    )
}

export default Services
