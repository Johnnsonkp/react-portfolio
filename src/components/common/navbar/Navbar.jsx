import 'antd/dist/antd.css';
import './Navbar.css'

import React, { useEffect, useState } from 'react';
import { onScrollEffect, useWindowSize } from '../../utils/utilFunctions';

import { HamburgerMenu } from '../button/Buttons';
import {Link} from 'react-router-dom'
import { PrimaryButton } from '../button/Buttons';
import { Switch } from 'antd';
import { gradientCapsule } from '../../utils/utilFunctions';

const Navbar = ({mode, setMode, lightColor, darkColor}) => {
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
                        href={true}
                    />)
                }
            </div>
        )
    }
    const BorderBottom = () => {
        return (
            <div style={{background: gradientCapsule('#E80A89', '#F15B2A'), height: '4px', width: '100%'}}>
            </div>
        )
    }
    return (
        <>
            <header 
                style={{
                    background: mode ? lightColor : darkColor
                }}
                onScroll={(event) => onScrollEffect(event, 80, "onScrollNav")} 
                id="home-header"
            >
                <nav className="header-nav">
                    <Link 
                        to="/#home-section" 
                        className="hero-text" 
                        style={{color: mode ? darkColor : lightColor}}
                    >
                        <div style={{margin: '0px', fontSize: '1.3rem', fontWeight: 'bold'}}> Johnthewebguy</div>
                    </Link>
                    <ul className="right" id="mainMenu">
                        <Switch 
                            style={{marginRight: '5px', marginLeft: '5px', border: '1px solid #fff'}} 
                            defaultChecked 
                            onClick={() => setMode(!mode)}
                        />
                        {/* <a className="social-links" href="https://www.linkedin.com/in/john-nkpolukwu-521201138/"><i className="fab fa-linkedin-in fa-1x"></i></a>
                        <a className="social-links" href="https://www.instagram.com/johnnsonkp/"><i className="fab fa-instagram fa-1x"></i></a>
                        <a className="social-links" href="https://codepen.io/Johnnsonkp"><i className="fab fa-codepen fa-1x"></i></a>
                        <a className="social-links" href="https://github.com/Johnnsonkp"><i className="fab fa-github fa-1x"></i></a> */}
                    </ul> 
                    <ButtonContainer />
                </nav>
                <BorderBottom />
            </header>
            
        </>
    )
}

export default Navbar;