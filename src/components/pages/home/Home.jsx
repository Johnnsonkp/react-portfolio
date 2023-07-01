// src/pic-edit.png
import './Home.css'

import { Container, FlexedContainer } from '../../common/containers/container';

import { CustomBanner } from '../../common/banner/Banner';
import { CustomTitle } from '../../common/headers/headers';
import { NavControl } from '../../utils/Index'
import React from 'react';
import { TextBoxContainer } from '../../common/containers/container';
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
                    }}
                >
                    <CustomTitle size={size} mode={mode} lightColor={lightColor}>
                           Not Your Average Developer 
                        </CustomTitle>
                    <TextBoxContainer size={size} mode={mode} lightColor={lightColor}>
                        Turning ideas into reality is my number #1 passion. This is achieved through my experience, having worked in various web development and web design environments, 
                        plus adehering to a step by step process that goes through the different phases of the development journey.
                        </TextBoxContainer>
                </div>
                <Container content={<FlexedContainer content={<TrustBar mode={mode} lightColor={lightColor} darkColor={darkColor}/>}/>}/>
            </div>
        </main>
   )
}
        
export default Home

