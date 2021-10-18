import React from 'react';
import pic from "../../../../src/pic-edit.png";
// src/pic-edit.png
import './Home.css'
import {NavControl, JobTitle} from '../../utils/Index'

const Home = () => {
    const fadeScroll = () => {
        const checkpoint = 800;
        window.addEventListener("scroll", () => {
            const currentScroll = window.pageYOffset;
            const homeSection = document.getElementById("home-section");

            if(currentScroll > 350 && window.innerWidth > 1000){
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
            
            <div className="overlay-hidden">

            
                <div className="block"></div>
                    <a className="outer-circle" href="#about">
                        {/* <img className="circle" src="profile-pic.jpg" alt=""></img> */}
                        <img className="profile-pic circle" src={pic} alt=""></img>
                    </a>
                    {/* <a className="circle" href="#about"></a> */}
                    <div className="content">
                        <div className="text-content">
                            <h4>HI THERE !</h4>
                            <div className="transition-title">
                                <div className="text-wrap">I'm </div>
                                <JobTitle/><div className="divider">|</div>
                            </div>
                            <p>I'm a Melbourne-based full-stack developer, with a passion for code and a love for technology. I specialise on the front-end and love turning design into code. </p>
                            <a className="view-my-work-btn" href="#portfolio">View My Work</a>
                        </div>
                    </div>
                    <div className="circles">
                        <NavControl />
                    </div>

            </div>

            
        </main>
   )
}
        
export default Home

