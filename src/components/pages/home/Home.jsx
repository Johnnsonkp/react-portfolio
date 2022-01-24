// src/pic-edit.png
import './Home.css'

import {JobTitle, NavControl} from '../../utils/Index'

import {AllPartnerIconComponent} from '../../partnerIcons/partnerIcons'
import { DisplayCircle } from '../../common/frame/Frame';
import {PrimaryButton} from '../../common/button/Buttons'
import React from 'react';
import pic from "../../../../src/pic-edit.png";

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
                    <div 
                        className="gradientBanner"
                        style={{
                            // background: '#f5f8fa',
                            // background: 'rgb(247, 246, 243)', 
                            height: '450px', 
                            borderBottomStyle: 'solid',
                            borderBottomWidth: '1px',
                            borderBottomColor: 'rgba(0,0,0,.125)',
                            border: '1px solid rgba(0,0,0,.125)',
                            paddingLeft: '50px',
                            paddingRight: '50px',
                            display: 'flex',
                            // flexDirection: 'column',
                            alignItems: 'center',
                            // alignItems: 'flex-start',
                            justifyContent: 'space-between',
                            justifyContent: 'space-around'
                        }}
                    >   
                        <div style={{display: 'flex', flexDirection: 'column', padding: '30px'}}>
                            <DisplayCircle 
                                outlineClass={"outer-circle"} 
                                link={'/about'} 
                                imgClass={"profile-pic circle"} 
                                pic={pic}
                                height={300}
                                width={300}
                            />
                            <AllPartnerIconComponent />
                        </div>
                        
                        <div style={{
                            border: '1px solid rgba(0, 0, 0, 0.125)', 
                            height: '80%', 
                            marginTop: 'auto', 
                            marginBottom: 'auto',
                            marginRight: '0px', 
                            marginLeft: '0px'
                        }}>
                        </div>
                        
                        <div style={{width: '700px', color: '#111', alignItems: 'center', padding: '10px', marginBottom: '80px'}}>
                            <div className="transition-title">
                                <div className="text-wrap">I'm </div>
                                <JobTitle/>.<div className="divider">|</div>
                            </div>
                            <div 
                                style={{
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'space-between',
                                    width: '410px',
                                    // border: '1px solid red'
                                }}
                            >
                               <h3 style={{fontWeight: 'bold', margin: '0px'}}>John Nkpolukwu - </h3>
                                <span 
                                    style={{
                                        fontStyle: 'italic', 
                                        fontSize: '0.8rem', 
                                        height: '100%', 
                                        margin: '0px',
                                        fontWeight: 'thin'
                                    }}> Web Developer | Designer | Freelancer</span>
                            </div> 
                            <div style={{width: '85%', lineHeight: '1.8', marginBottom: '30px'}}>
                                <p style={{fontSize: '1rem', marginTop: '34px'}}>Melbourne based full stack developer, designer and freelancer specialising on the front-end. Turning ideas into reality.</p>
                            </div>
                            <PrimaryButton 
                                title={'VIEW MY WORK' } 
                                ink={'/projects'} 
                                position={'left'}
                                boxShadow={false}
                            />
                        </div>
                                    
                    </div>
                    <div style={{marginTop: '35px', padding: '50px', marginLeft: 'auto', marginRight: 'auto', width: '70%', textAlign: 'center'}}>
                        <h1>Not Your Average Developer</h1>
                        <div>
                        <p style={{fontSize: '1rem', marginTop: '25px', color: '#111', width: '90%'}}>Melbourne based full stack developer, designer and freelancer specialising on the front-end. Turning ideas into reality.</p>
                        {/* <ul style={{display: 'flex', justifyContent: 'space-between', alignItems: 'space-between', fontSize: '12px', paddingLeft: '14px', textAlign: 'center', maxWidth: '300px', color: '#111'}}>
                                <span >
                                    <li style={{padding: '5px'}}>E-comm specialists</li>
                                    <li style={{padding: '5px'}}>9X AVERAGE ROAS</li> 
                                </span>
                                <span>
                                    <li style={{padding: '5px'}}>9X AVERAGE ROAS</li>
                                    <li style={{padding: '5px'}}>SEO Optimisation</li> 
                                </span>
                        </ul> */}
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

