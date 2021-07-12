import React from 'react';
import './Home.css'
import {Circles, JobTitle} from '../../utils/Index'


const Home = () => {
    const fadeScroll = () => {
        const checkpoint = 800;
        window.addEventListener("scroll", () => {
            const currentScroll = window.pageYOffset;
            const homeSection = document.getElementById("home-section");
            
            // currentScroll > 250 ? homeSection.classList.add('blur') : homeSection.classList.remove('blur')

            if(currentScroll > 250 && window.innerWidth > 1000){
                homeSection.classList.add('blur')
            } else{
                homeSection.classList.remove('blur')
            }
            
            currentScroll <= checkpoint ? homeSection.style.opacity = 1.5 - currentScroll / checkpoint :
                                          homeSection.style.opacity = 0;
                              
        });
    }

    return (
        <main id="home-section" onLoad={fadeScroll()}>
            
            <div className="block"></div>
                <a className="outer-circle" href="#about">
                    <img className="circle" src="profile-pic.jpg" alt=""></img>
                </a>
                {/* <a className="circle" href="#about"></a> */}
                <div className="content">
                    <div className="text-content">
                        <h4>HI THERE !</h4>
                        <div className="transition-title">
                            <div className="text-wrap">I'm </div>
                            <JobTitle/><div className="divider">|</div>
                        </div>
                        <p>I'm a Melbourne based Full stack developer & designer, with a passion for code and a love for technology. I specialise on the front-end and love turning design into code. </p>
                        <a className="view-my-work-btn" href="#portfolio">View My Work</a>
                    </div>
                </div>
                <div className="circles">
                    <Circles />
                </div>
            {/* </div> */}

            
        </main>
   )
}
        
export default Home

