import React, { useEffect } from 'react';

const Circles = () => {

    useEffect(() => {
        let sideNav = document.querySelectorAll('.sideNav')
        let sections = document.querySelectorAll('.inner-circle')

        homeHighlight()
        function homeHighlight(){
            setTimeout(() => {
                sections[0].classList.add('activeClick')
            }, 3000);
        }

        setTimeout(() => {     
            for(let i = 0; i < sideNav.length; i++){
                sideNav[i].classList.add('showCircles')
                sideNav[i].classList.remove('hideCircles')
            }
        }, 1500)
        // setTimeout(activeClick(), 3000)
        fadeIn();
        handleClick()
        onScroll()

        function onScroll(){
            window.addEventListener("scroll", () => {
                const currentScroll = window.pageYOffset

                if(currentScroll > 100) {
                    let section = "home"
                    activeClick(section)
                }
                if(currentScroll >= 600) {
                    let section = "about"
                    activeClick(section)
                }
                if(currentScroll >= 1500) {
                    let section = "portfolio"
                    activeClick(section)
                }
                if(currentScroll >= 2500) {
                    let section = "blog"
                    activeClick(section)
                }
                if(currentScroll >= 3100) {
                    let section = "contact"
                    activeClick(section)
                }

            })
        }

        function activeClick(input){
            deactivateClick(input)

            let section = document.querySelectorAll("." + input)
            section.forEach((active) => {
                active.classList.add('activeClick')
            }) 
        }

        function deactivateClick(input){
            let section = document.querySelectorAll("." + input)
            // let allSection = document.querySelectorAll('.inner-circle')

            section.forEach((active) => {
                document.querySelectorAll('.inner-circle').forEach((innerSection) => {
                    if(active !== innerSection){
                        innerSection.classList.remove("activeClick")
                    }
                })
            })
        }

        function handleClick(e){
            // let home = document.querySelectorAll('.home')
            // let about = document.querySelectorAll('.about')
            let allSection = document.querySelectorAll('.inner-circle')
            
            allSection.forEach((section) => {
                section.classList.remove('activeClick')

                section.addEventListener('click', (e) => {
                    section.classList.add('accent-color')
                    const pageSection = e.target.classList[1]

                    if(pageSection === "home"){
                        activeClick("home")

                        if(window.pageYOffset > 620){
                            e.preventDefault();
                            window.scrollTo(0, 0)
                        }
                    }
                    if(pageSection === "about"){
                        activeClick("about")

                        if(window.pageYOffset > 1000){
                            e.preventDefault();
                            window.scrollTo(0, 1000)
                        }
                    }
                    if(pageSection === "portfolio"){
                        activeClick("portfolio")

                        if(window.pageYOffset > 1800){
                            e.preventDefault();
                            window.scrollTo(0, 1800)
                        }
                    }
                    if(pageSection === "blog"){
                        activeClick("blog")

                        if(window.pageYOffset > 2800){
                            e.preventDefault();
                            window.scrollTo(0, 2800)
                        }
                    }
                    if(pageSection === "contact"){
                        activeClick("contact")
                    }
                })
            })

        }

        function fadeIn(){
            let checkpoints = [230, 620, 1180, 1400, 2258, 2630, 3140, 3347]
            let sideNav = document.querySelectorAll('.sideNav')

            window.addEventListener("scroll", () => {
                const currentScroll = window.pageYOffset

                if(currentScroll < checkpoints[0]) {
                    for(let i = 0; i < sideNav.length; i++){
                        sideNav[i].classList.add('showCircles')
                        sideNav[i].classList.remove('hideCircles')
                    }
                }
                // #hide controller
                if(currentScroll >= checkpoints[0]) {
                    for(let i = 0; i < sideNav.length; i++){
                        sideNav[i].classList.remove('showCircles')
                        sideNav[i].classList.add('hideCircles')
                    }
                }
                // #Show controller
                if(currentScroll >= checkpoints[1] ){
                    for(let i = 0; i < sideNav.length; i++){
                        sideNav[i].classList.add('showCircles')
                        sideNav[i].classList.remove('hideCircles')
                    }
                }
                // #hide controller
                if(currentScroll >= checkpoints[2]) {
                    for(let i = 0; i < sideNav.length; i++){
                        sideNav[i].classList.remove('showCircles')
                        sideNav[i].classList.add('hideCircles')
                    }
                }
                // #Show controller
                if(currentScroll >= checkpoints[3] ){
                    for(let i = 0; i < sideNav.length; i++){
                        sideNav[i].classList.add('showCircles')
                        sideNav[i].classList.remove('hideCircles')
                    }
                }
                // #hide controller
                if(currentScroll >= checkpoints[4]) {
                    for(let i = 0; i < sideNav.length; i++){
                        sideNav[i].classList.remove('showCircles')
                        sideNav[i].classList.add('hideCircles')
                    }
                }
                // #Show controller
                if(currentScroll >= checkpoints[5] ){
                    for(let i = 0; i < sideNav.length; i++){
                        sideNav[i].classList.add('showCircles')
                        sideNav[i].classList.remove('hideCircles')
                    }
                }
                // #hide controller
                if(currentScroll >= checkpoints[6]) {
                    for(let i = 0; i < sideNav.length; i++){
                        sideNav[i].classList.remove('showCircles')
                        sideNav[i].classList.add('hideCircles')
                    }
                }
                // #Show controller
                if(currentScroll >= checkpoints[7] ){
                    for(let i = 0; i < sideNav.length; i++){
                        sideNav[i].classList.add('showCircles')
                        sideNav[i].classList.remove('hideCircles')
                    }
                }
            })
            
        }
    })


    return (
        // <div> 
            <div className="hideCircles sideNav">
                <a id="home" className="inner-circle home" href="#home-section">
                    <img className="img home" src="./home-img.png" alt="" href="#home-section"/>
                    {/* <span className="home-hover">Home</span> */}
                </a> 
                <a id="home" className="inner-circle about" href="#about">
                    <img className="img about" src="./me-2.png" alt="" href="#about"/>
                </a> 
                <a id="home" className="inner-circle portfolio" href="#portfolio">
                    <img className="img portfolio" src="./portfolio.png" alt="" href="#portfolio"/>
                </a>
                <a id="home" className="inner-circle blog" href="#blogSection">
                    <img className="img blog" src="./blog.png" alt="" href="#blogSection"/>
                </a>
                <a id="home" className="inner-circle contact" href="#contact">
                    <img className="img contact" src="./contact.png" alt="" href="#contact"/>
                </a>
            </div>
        // </div>
    )
} 
export default Circles