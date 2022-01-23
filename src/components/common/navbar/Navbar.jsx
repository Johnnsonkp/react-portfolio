import 'antd/dist/antd.css';
import './Navbar.css'

import React, { useEffect, useState } from 'react';
import { onScrollEffect, useWindowSize } from '../../utils/utilFunctions';

import { HamburgerMenu } from '../button/Buttons';
import {Link} from 'react-router-dom'
import { PrimaryButton } from '../button/Buttons';
import { Switch } from 'antd';

const Navbar = (props) => {
    const size = useWindowSize();
    const ButtonContainer = () => {
        return (
            <div>
                {
                    size.width <= 768 ? (<HamburgerMenu />) : 
                    (<PrimaryButton 
                        title="GET IN TOUCH" 
                        link="Resume-oct-2021(final border).pdf" 
                        pulse={true}
                    />)
                }
            </div>
        )
    }
    return (
        <header onScroll={(event) => onScrollEffect(event, 80, "onScrollNav")} id="home-header">
            <nav className="header-nav">
                <Link 
                    to="/" 
                    className="hero-text" 
                    style={{color: '#111'}}
                >
                    <div style={{margin: '0px', fontSize: '1.3rem'}}> Johnthewebguy</div>
                </Link>
                <ul className="right" id="mainMenu">
                    <Switch style={{marginRight: '8px', marginLeft: '8px'}} defaultChecked />
                    <a className="social-links" href="https://www.linkedin.com/in/john-nkpolukwu-521201138/"><i className="fab fa-linkedin-in fa-1x"></i></a>
                    <a className="social-links" href="https://www.instagram.com/johnnsonkp/"><i className="fab fa-instagram fa-1x"></i></a>
                    <a className="social-links" href="https://codepen.io/Johnnsonkp"><i className="fab fa-codepen fa-1x"></i></a>
                    <a className="social-links" href="https://github.com/Johnnsonkp"><i className="fab fa-github fa-1x"></i></a>
                </ul> 
                <ButtonContainer />
            </nav>
        </header>
    )
}

export default Navbar;