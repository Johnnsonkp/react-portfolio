import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <header id="home-header">
            <nav className="header-nav">
                <a className="hero-text left" href="https://johnnsonkp-dev.herokuapp.com/">Johnnsonkp</a>
                <ul className="right" id="mainMenu">
                        <a className="social-links" href="https://www.linkedin.com/in/chinonso-john-nkpolukwu-521201138/"><i className="fab fa-linkedin-in fa-1x"></i></a>
                        <a className="social-links" href="https://www.instagram.com/johnnsonkp/"><i className="fab fa-instagram fa-1x"></i></a>
                        <a className="social-links" href="https://codepen.io/Johnnsonkp"><i className="fab fa-codepen fa-1x"></i></a>
                        <a className="social-links" href="https://github.com/Johnnsonkp"><i className="fab fa-github fa-1x"></i></a>
                </ul> 

                <a href="./images/developer-resume-march.pdf" className="resume-button">Resume</a>
            </nav>
        </header>
    )
}

export default Navbar;