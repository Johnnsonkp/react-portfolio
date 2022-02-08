import './Footer.css';

import React from 'react';

const Footer = () => {
    return (
        <section className="test" id="home-footer">
            <footer id="main-footer">
                <div className="footer-container">
                    <div className="linked">
                        <a href="https://www.linkedin.com/in/john-nkpolukwu-521201138/"><i className="fab fa-linkedin-in fa-2x"></i></a>
                    </div>
                    <div className="insta">
                        <a href="https://www.instagram.com/johnnsonkp/"><i className="fab fa-instagram fa-2x"></i></a>
                    </div>
                    <div className="code">
                        <a href="https://codepen.io/Johnnsonkp"><i className="fab fa-codepen fa-2x"></i></a>
                    </div>
                    <div className="git">
                        <a href="https://github.com/Johnnsonkp"><i className="fab fa-github fa-2x"></i></a>
                    </div>
                </div>
                <h5><span className="highlight">Johnnsonkp</span> &copy;2022 </h5>
            </footer>
        </section>
    )
}


export default Footer