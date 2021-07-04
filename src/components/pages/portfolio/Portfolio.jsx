import React, { useState, useEffect } from 'react';
import './Portfolio.css'
import Circles from '../../utils/Circles'
import Title from '../../common/title'

const Portfolio = () => {
    const fadeScroll = () => {
        const checkpoint = 5250;

        window.addEventListener("scroll", () => {
            
            const currentScroll = window.pageYOffset;
            const currentSection = document.getElementById("portfolio")

            if(currentScroll > 2100 && window.innerWidth > 700){
                currentSection.classList.add('blur')
            }else{
                currentSection.classList.remove('blur')
            }

            // currentScroll > 2100 && window.width > 700 ? currentSection.classList.add('blur') : currentSection.classList.remove('blur')

            currentScroll <= checkpoint ? currentSection.style.opacity = 1.8 - currentScroll / checkpoint : currentSection.style.opacity = 0;
            
        });
    }
    const handleClick = (e) => {
        const allButtons = document.querySelectorAll('.portfolioBtn')
        const allProjects = document.querySelectorAll('.project-wrapper')
        const activeButton = e.target.id

        const displayAllProjects = () => {
            allProjects.forEach((project) => {
                project.style.display = "block"
            })
        }
        const displayProfessionalProjects = () => {
            allProjects.forEach((project) => {
                for(let i = 0; i < project.classList.length -1; i++){
                    if(project.classList[i] === "professional"){
                        project.style.display = "block"
                    } else{
                        project.style.display = "none"
                    }
                }
            })
        }
        const displayDesignProjects = () => {
            allProjects.forEach((project) => {
                for(let i = 0; i < project.classList.length; i++){
                    if(project.classList[i] !== "design"){
                        project.style.display = "none"
                    }else{
                        project.style.display = "block"
                    }
                }
            })
        }
        allButtons.forEach((btn) => {
            if(btn.classList[1]){
                btn.classList.remove("allProjects", "professionalProjects", "designProjects")
            }
        })
        e.target.classList.add(activeButton)
        
        if(activeButton === "allProjects"){
            displayAllProjects()
        }
        if(activeButton === "professionalProjects"){
            displayProfessionalProjects()
        }
        if(activeButton === "designProjects"){
            displayDesignProjects()
        }
    }
    
    return (
        <section id="portfolio" onLoad={fadeScroll()}>
            <div class="container"> 
            {/* <h1>Recent Portfolio<hr></hr></h1> */}
            
            <div className="porfolio">
                 <Title title1="RECENT" title2="PORTFOLIO" titleBackground="PORTFOLIO"/>
            </div>
            
            <div className="project-selectors">
                <button onClick={handleClick} className="portfolioBtn allProjects fade" id="allProjects">All</button>
                <button onClick={handleClick} className="portfolioBtn fade" id="professionalProjects">Professional Projects</button>
                <button onClick={handleClick} className="portfolioBtn fade" id="designProjects">Design</button>
            </div>
            <div class="projects-container">
                <div className="row">
                    <div className="project-wrapper all design">
                        <a href="https://cozy-tees-app.herokuapp.com/">
                            <img src="./cozy-tees.png"/>
                            <div className="inner-content">
                                <h4>Cozy Tees Marketplace</h4>
                                <a class="btn" href="https://cozy-tees-app.herokuapp.com/">View Project</a>
                                <a class="btn" href="https://github.com/Johnnsonkp/cozy_tees">Source Code</a>
                            </div>
                        </a>
                    </div>
                    <div className="project-wrapper all design">
                        <a href="https://its-a-vibe.netlify.app/">
                            <img src="./vibe.png"/>
                            <div className="inner-content">
                                <h4>It's A Vibe</h4>
                                <a class="btn" href="https://its-a-vibe.netlify.app/">View Project</a>
                                <a class="btn" href="https://github.com/its-a-vibe/vibe">Source Code</a>
                            </div>
                        </a>
                    </div>
                    <div className="project-wrapper all professional design">
                        <a class="link" href="https://flightclubgolf.com/">
                            <img src="./flight-club.png"/>
                            <div className="inner-content">
                                <h4>Flight Golf Club</h4>
                                <a class="btn" href="https://flightclubgolf.com/">View Project</a>
                            </div>
                        </a>
                    </div> 
                </div>
                <div className="row">
                    <div className="project-wrapper all design">
                        <a href="https://johnnsonkp-dev.herokuapp.com/">
                            <img src="./portfolio-v2.png"/>
                            <div className="inner-content">
                                <h4>Portfolio v2</h4>
                                <a class="btn" href="https://johnnsonkp-dev.herokuapp.com/">View Project</a>
                                <a class="btn" href="https://github.com/Johnnsonkp/johnnsonkp-dev">Source Code</a>
                            </div>
                        </a>
                    </div>
                    <div className="project-wrapper all professional design">
                        <a href="https://bookgrocer.com/">
                            <img src="./book-grocer.png"/>
                            <div className="inner-content">
                                <h4>The Book Grocer</h4>
                                <a class="btn" href="https://bookgrocer.com/">View Project</a>
                            </div>
                        </a>
                    </div>
                    <div className="project-wrapper all design">
                        <a class="link" href="https://rails-moviedb.herokuapp.com/">
                            <img src="./bitflix.png"/>
                            <div className="inner-content">
                                <h4>Bitflix</h4>
                                <a class="btn" href="https://rails-moviedb.herokuapp.com/">View Project</a>
                                <a class="btn" href="https://github.com/Johnnsonkp/ROR-movies">Source Code</a>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            </div>
            <div className="circles">
                 <Circles />
            </div>
        </section>
    )
}
export default Portfolio