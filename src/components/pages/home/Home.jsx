// src/pic-edit.png
import './Home.css'

import { Container, FlexedContainer } from '../../common/containers/container';

import { CustomBanner } from '../../common/banner/Banner';
import { NavControl } from '../../utils/Index'
import React from 'react';
import {TrustBar} from '../../common/frame/Frame'
import { useWindowSize } from '../../utils/utilFunctions';

const Home = ({mode, setMode, lightColor, darkColor}) => {
    const size = useWindowSize()
    return (
        <main id="home-section">
            <div 
                className="overlay-hidden"
                style={{background: mode? lightColor : darkColor, height: '100%', marginBottom: '20px'}}
            >
                <CustomBanner mode={mode} darkColor={darkColor} lightColor={lightColor}/>
                <div 
                    style={{
                        marginTop: '35px', 
                        padding: '20px', 
                        marginLeft: 'auto', 
                        marginRight: 'auto', 
                        width: size.width > 960? '70%' : '100%', 
                        textAlign: 'center'   
                    }}>
                    <h1 style={{fontSize: size.width > 600? '2.5rem' : '1.5rem', color: mode? '#474747' : lightColor}}>Not Your Average Developer</h1>
                    <div>
                        <p style={{fontSize: size.width > 475? '1rem': '0.9rem', marginTop: '25px', color: mode? '#717171' : lightColor, width: '90%', marginLeft: 'auto', marginRight: 'auto', lineHeight: '2.4'}}>
                            Professional experience in web design and development environments, well versed with multiple technologies.
                        </p>
                    </div>
                </div>
                <Container content={<FlexedContainer content={<TrustBar />}/>}/>
            </div>
        </main>
   )
}
        
export default Home

// #474747
// color: mode? darkColor : lightColor