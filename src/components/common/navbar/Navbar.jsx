import 'antd/dist/antd.css';
import './Navbar.css'

import React, { useEffect, useState } from 'react';
import { onScrollEffect, useWindowSize } from '../../utils/utilFunctions';

import { HamburgerMenu } from '../button/Buttons';
import {Link} from 'react-router-dom'
import {NavbarDesktop} from './NavbarDesktop'
import { PrimaryButton } from '../button/Buttons';
import { Switch } from 'antd';
import { gradientCapsule } from '../../utils/utilFunctions';
import { propData } from '../../utils/utilFunctions';

const Navbar = ({mode, setMode, lightColor, darkColor}) => {
    const size = useWindowSize();
    const dataProps = propData({mode, setMode, lightColor, darkColor})
    const ButtonContainer = () => {
        return (
            <div>
                {
                    size.width <= 768 ? (<HamburgerMenu {...dataProps}/>) : 
                    (<PrimaryButton 
                        // title="GET IN TOUCH" 
                        title="RESUME"
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
                    background: mode? lightColor : darkColor
                }}
                onScroll={(event) => onScrollEffect(event, 80, "onScrollNav")} 
                id="home-header"
            >
                <nav className="header-nav">
                    <Link 
                        to="/#home-section" 
                        className="hero-text" 
                        style={{color: mode? darkColor : lightColor}}
                    >
                        <div style={{color: mode? darkColor : lightColor, margin: '0px', fontSize: '1.8rem', fontWeight: 'bolder', letterSpacing: '-2px'}}> Chinonso<span style={{color: '#ff0032', fontSize: '2rem'}}>.</span></div>
                    </Link>
                    <NavbarDesktop />
                    <ul className="right" id="mainMenu">
                        <Switch 
                            style={{marginRight: '5px', marginLeft: '5px', border: '1px solid #fff'}} 
                            defaultChecked 
                            onClick={() => setMode(!mode)}
                        />
                    </ul> 
                    <ButtonContainer />
                </nav>
                <BorderBottom />
            </header>
            
        </>
    )
}

export default Navbar;