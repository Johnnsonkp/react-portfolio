import React from 'react'
import './About.css'
import NavControl from '../../utils/NavControl'
import Component from '../../utils/myservice'
import Title from '../../common/title'


const About = () => {
    const fadeScroll = () => {
        const checkpoint = 3050;

        window.addEventListener("scroll", () => {
            const currentScroll = window.pageYOffset;
            const aboutSection = document.getElementById("about")

            if(currentScroll > 1350 && window.innerWidth > 1000){
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
                    <Title section="about-section" title1="ABOUT" title2="ME" titleBackground="RESUME"/>
                    <div className="main-content">
                        <div className="about-me-container">
                            <div className="about-pic"></div>
                            <hr style={displayNone} className="body-hr"></hr>
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
                            <a href="Resume-oct-2021(final border).pdf" className="resume-button">Download CV</a>
                        </div>
                        
                        <div className="text right">
                            {/* <p>My name is John Nkpolukwu, I'm a Melbourne-based Software developer and recent Bootcamp graduate, with a passion for code and a love for everything technology. Currently employed as a front-end developer, I'm a well-versed front-end developer and specialist on the e-commerce platforms Shopify and WordPress.
                            </p> */}
                            <p>I???m a Melbourne based software engineer and bootcamp graduate with a love for technology and a passion for optimisation. Currently employed as a front-end developer, I specialise on the front-end, and I'm well-versed with ReactJs and other front-end technologies.</p>
                            <br></br>
                            <hr className="body-hr"></hr>
                            <div className="my-service-container">
                                <Component />
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