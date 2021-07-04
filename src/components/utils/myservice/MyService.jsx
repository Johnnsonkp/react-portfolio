// import React from 'react'
import './Myservice.css'
import React, { useState, useEffect } from 'react';

const Myservice = () => {
    const serviceStyle = {
        display: "flex",
        justifyContent: "space-between",
        overflow: "hidden",
        width: '800px',
        position: 'relative',
        let: '20%',
    }
    const service = {
        textAlign: 'center',
        padding: '25px 25px',
        boxSizing: 'borderBox',
        borderRadius: '20px',
        fontSize: '17px',
        backgroundColor: '#25293450',
        backgroundColor: '#111',
        color: '#fff',
        margin: '5px',
        
    }
    const transitionEffect = {
        transform: "translate3d(-1140px, 0px, 0px)",
        transition: "all 1s ease 0s",
        width: "4560px"
    }

    useEffect(() => {
        let slideIndex = 0;
        showSlides();

        function showSlides() {
            let slides = document.getElementsByClassName("singleService");
            const totalSlides = slides.length

            const slideEffect = (slideIndex) => {
                slides[slideIndex].style.display = "block";
                slides[slideIndex + 1].style.display = "block";
                slides[slideIndex + 2].style.display = "block";
            }

            for (let i = 0; i < totalSlides; i++) {
                // slides[i].classList.add('transitionEffect')
                slides[i].style.display = "none";
            }
            

            if(slideIndex == totalSlides - 3){
                slideIndex = 0;
                slideEffect(slideIndex)
            } else {
                slideIndex++
                slideEffect(slideIndex)
            }
            setTimeout(showSlides, 5000); // Change image every 2 seconds
        }
    });

    return (
        <div style={serviceStyle} class="service-container">
            <div className="singleService fade" style={service}>
                <i class="fas fa-code"></i>
                <h5>Web Development</h5>
                <p className="singleService-text">Custom web development using a range of technologies. </p>
            </div>

            <div className="singleService fade" style={service}>
                <i class="fas fa-pen-nib"></i>
                <h5>Responsive Design</h5>
                <p className="singleService-text">Responsive design practcies From smartphones to laptops to tablets. </p>
            </div>

            <div className="singleService fade" style={service}>
                <i class="fas fa-rss"></i>
                <h5>Fast Communication</h5>
                <p className="singleService-text">Consistent, quick and straight to the point communication. </p>
            </div>

            <div className="singleService fade" style={service}>
                <i class="fas fa-drafting-compass"></i>
                <h5>Ui ux Design</h5>
                <p className="singleService-text">Optimized user experience</p>
            </div>
            <div className="singleService fade" style={service}>
                <i class="fas fa-drafting-compass"></i>
                <h5>Eccomerce Expertise</h5>
                <p className="singleService-text">Optimizaztion and setting up of eccormerce websites and conversion tracking </p>
            </div>
            {/* <div className="singleService fade" style={service}>
                <i class="fas fa-drafting-compass"></i>
                <h5>New slide 1</h5>
                <p className="singleService-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </p>
            </div>
            <div className="singleService fade" style={service}>
                <i class="fas fa-drafting-compass"></i>
                <h5>New slide 2</h5>
                <p className="singleService-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </p>
            </div> */}
            

        </div>
    )
}

export default Myservice