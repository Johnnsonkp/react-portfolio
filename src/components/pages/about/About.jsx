import './About.css'

import { Container } from '../../common/containers/container'
import { DisplayBox } from '../../common/frame/Frame'
import { NakedButtonLink } from '../../common/button/Buttons'
// import Component from '../../utils/myservice'
import NavControl from '../../utils/NavControl'
import { Processes } from '../../common/textContent/process'
import React from 'react'
import { TechStackContainer } from '../../utils/icons/icons'
import Title from '../../common/title'
import { useWindowSize } from "../../utils/utilFunctions";

const About = ({mode, setMode, lightColor, darkColor}) => {
    const size = useWindowSize()
    return (
        <section id="about" style={{backgroundColor: mode? lightColor : darkColor}}>
            <Container 
                content={
                    <DisplayBox 
                     innerCard={true}
                     component1={<Processes />}
                    //  component2={<TechStackContainer />}
                     width={size.width > 1150? '94%' : '100%'}
                     title={'Why choose me for your project?'}
                     titleStyle={{
                         marginLeft: '15px', 
                         marginBottom: '40px', 
                         fontSize: size.width > 1350? null : size.width > 1200? '1.7rem' : '1.4rem',

                    }}
                     ButtonIcon={
                        <NakedButtonLink 
                        link={'Resume-oct-2021(final border).pdf'} 
                        title={'More About Me'}/>} 
            />} />
        </section>
    )
}

export default About
