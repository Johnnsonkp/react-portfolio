import React from 'react';
import './Navbar.css'

const Navbar = () => {

    const onScroll = () => {
        window.addEventListener("scroll", () => {
            const currentScroll = window.pageYOffset;

            if(currentScroll > 80){
                document.getElementById("home-header").classList.add('onScrollNav')
            }
            if(currentScroll < 80){
                document.getElementById("home-header").classList.remove('onScrollNav')
            }
        });
    }

    return (
        <header onScroll={onScroll()} id="home-header">
            <nav className="header-nav">
                <a className="hero-text left" href="https://johnnsonkp-dev.netlify.app/">Johnnsonkp</a>
                <ul className="right" id="mainMenu">
                        <a className="social-links" href="https://www.linkedin.com/in/john-nkpolukwu-521201138/"><i className="fab fa-linkedin-in fa-1x"></i></a>
                        <a className="social-links" href="https://www.instagram.com/johnnsonkp/"><i className="fab fa-instagram fa-1x"></i></a>
                        <a className="social-links" href="https://codepen.io/Johnnsonkp"><i className="fab fa-codepen fa-1x"></i></a>
                        <a className="social-links" href="https://github.com/Johnnsonkp"><i className="fab fa-github fa-1x"></i></a>
                </ul> 

                <a href="Resume-oct-2021(final border).pdf" className="resume-button">Resume</a>
            </nav>
        </header>
    )
}

export default Navbar;