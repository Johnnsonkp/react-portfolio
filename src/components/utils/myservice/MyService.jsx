// import React from 'react'
import './Myservice.css'
import React, { useEffect} from 'react'
// import ReactDOM from 'react-dom';
// import { Carousel } from '@trendyol-js/react-carousel';
// import { Rerousel } from 'rerousel';



const Myservice = () => {
    const serviceStyle = {
        display: "flex",
        justifyContent: "flex-start",
        width: '790px'
    }
    const service = {
        textAlign: 'center',
        padding: '15px 10px',
        boxSizing: 'borderBox',
        borderRadius: '20px',
        fontSize: '17px',
        backgroundColor: '#111',
        color: '#fff',
        margin: '5px',
        width: "250px"
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
                setTimeout(() => {
                    slides[slideIndex].classList.add('transitionEffect')

                    if(slides[slideIndex + 3]){
                    }
                }, 5000)
            }
            for (let i = 0; i < totalSlides; i++) {
                slides[i].style.display = "none";
                slides[i].classList.remove('transitionEffect')   
            } 
            if(slideIndex === totalSlides - 3){
                slideIndex = 0;
                slideEffect(slideIndex)
            } else {
                slideIndex++
                slideEffect(slideIndex)
            }
            setTimeout(showSlides, 5200); // Change image every 2 seconds
        }
    });

    return (
        <div style={serviceStyle} className="service-container">
            <div className="singleService fade" style={service}>
                <i className="fas fa-code"></i>
                <h5>Web Development</h5>
                <p className="singleService-text">Custom web development using a range of technologies. </p>
            </div>

            <div className="singleService fade" style={service}>
                <i className="fas fa-pen-nib"></i>
                <h5>Responsive Design</h5>
                <p className="singleService-text">Responsive design practcies From smartphones to laptops to tablets. </p>
            </div>

            <div className="singleService fade" style={service}>
                <i className="fas fa-rss"></i>
                <h5>Fast Communication</h5>
                <p className="singleService-text">Consistent, quick and straight to the point communication. </p>
            </div> 

            <div className="singleService fade" style={service}>
                <i className="fas fa-drafting-compass"></i>
                <h5>Ui ux Design</h5>
                <p className="singleService-text">Optimized user experience</p>
            </div>
            <div className="singleService fade" style={service}>
                <i className="fas fa-drafting-compass"></i>
                <h5>Eccomerce Expertise</h5>
                <p className="singleService-text">Optimizaztion and setting up of eccormerce websites and conversion tracking </p>
            </div>
        </div>

        
    )
}

export default Myservice