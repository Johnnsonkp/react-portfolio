import React from 'react'
import './About.css'
import NavControl from '../../utils/NavControl'
import Myservice from '../../utils/myservice'
import Title from '../../common/title'


const About = () => {
    const fadeScroll = () => {
        const checkpoint = 3050;

        window.addEventListener("scroll", () => {
            const currentScroll = window.pageYOffset;
            const aboutSection = document.getElementById("about")

            if(currentScroll > 1050 && window.innerWidth > 1000){
                aboutSection.classList.add('blur')
            } else{
                aboutSection.classList.remove('blur')
            }
            currentScroll <= checkpoint ? aboutSection.style.opacity = 1.2 - currentScroll / checkpoint : aboutSection.style.opacity = 0;
        });
    }
    const displayNone = {
        display: "none"
    }
    
    return (
        
        <section id="about" onLoad={fadeScroll()}>

            <div className="overlay-hidden">

                <div className="container">
                    <Title title1="ABOUT" title2="ME" titleBackground="RESUME"/>
                    <div className="main-content">
                        <div className="about-me-container">
                            <div className="about-pic"></div>
                            <hr style={displayNone} class="body-hr"></hr>
                            <div className="tech-stack">
                                <h3 className="mini-header">Tech Stack</h3>
                                <div className="dev-tools">             
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
                                    </div>        
                                </div>
                            </div>
                            <a href="developer-resume-march.pdf" className="resume-button">Download CV</a>
                        </div>
                        
                        <div className="text right">
                            <p>My name is Chinonso John Nkpolukwu, I'm a Melbourne-based Full stack developer and recent Bootcamp graduate, with a passion for code and a love for everything technology. Currently employed as a front-end developer at a digital marketing agency, I'm a well-versed front-end developer and specialist on the e-commerce platforms Shopify and WordPress.
                            </p>
                            <br></br>
                            <hr className="body-hr"></hr>
                            <h5 className="serviceHeader">My Service</h5>
                            <br/>
                            <div className="my-service-container">
                                <Myservice />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="circles">
                    <NavControl />
                </div>

            </div>
            
        </section>
    )
}

export default About