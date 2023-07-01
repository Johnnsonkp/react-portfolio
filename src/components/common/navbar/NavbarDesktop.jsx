import './Navbar.css'

import React, { useEffect, useState } from 'react';

export const NavbarDesktop = () => {
    const [toggle, setToggle] = useState(false)

    const scrollToTopOfPage = () => {
        window.scrollTo(0, 0)
    }
    const clickToHighlight = () => {
        // Object.values(document.getElementsByClassName('navBtn')).forEach((element) => {
        //     element.addEventListener('click', () => {
        //         element.style.color = "red"
        //     })
        // })
        setToggle(true)
    }
    // useEffect(() => {
    //     if(toggle === true){
    //         removeHighlight()
    //     }
    //     setToggle(false)
    // }, [toggle])
    return(
        <div class="navbarDesktop">
            <ul class="innerNav" onClick={ ()=> clickToHighlight()}>
                <li><a class="navBtn" onClick={() => scrollToTopOfPage() } href="#">Home</a></li>
                <li><a class="navBtn" href="#about">About</a></li>
                <li><a class="navBtn" href="#portfolio">Project</a></li>
                <li><a class="navBtn" href="#blogSection">Article</a></li>
                <li><a class="navBtn" href="#contact">Contact</a></li>
            </ul>
        </div>
    )
};