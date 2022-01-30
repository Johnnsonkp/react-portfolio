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
                     component1={<Processes />}
                     component2={<TechStackContainer />}
                     width={size.width > 1150? '94%' : '100%'}
                     title={'Why choose me/my agency for your project?'}
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
{/* <a href="Resume-oct-2021(final border).pdf" className="resume-button">Download CV</a> */}

{/* <div className="dev-tools">             
    <div className="html tech">
        <i className="fab fa-html5 fa-1x"></i>
        <h5>HTML</h5>
    </div>
    <div className="css tech">
        <i className="fab fa-css3 fa-1x"></i>
        <h5>CSS</h5>
        
    </div>
    <div className="Sass tech">
        <i className="fab fa-sass fa-1x"></i>
        <h5>SASS</h5>
        
    </div>
    <div className="javascript tech">
        <i className="fab fa-js fa-1x"></i>
        <h5>Javascript</h5>

    </div>
</div>
<div className="dev-tools">
    <div className="ruby tech">
        <i className="fas fa-gem fa-1x"></i>
        <h5>Ruby</h5>
    </div>
    <div className="react tech">
        <i className="fab fa-react fa-1x"></i>
        <h5>React</h5>
    </div>
    <div className="shopify tech">
    <i className="fab fa-shopify fa-1x"></i>
        <h5>Shopify</h5>
    </div> 
    <div className="wordpress tech">
    <i className="fab fa-wordpress fa-1x"></i>
        <h5>Wordpress</h5>
</div>   */}