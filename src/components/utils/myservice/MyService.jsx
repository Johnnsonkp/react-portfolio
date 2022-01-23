// import React from 'react'
import './Myservice.css'

import React, { Component } from 'react'

// import Slider from "react-slick";

export default class MultipleItems extends Component {
    render() {
        const serviceStyle = {
            // display: "flex",
            // justifyContent: "flex-start",
            // width: '790px'
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
            width: "30px"
        }
      const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        // dotsClass: 
        pauseOnFocus: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };


      return ( 
        <div style={serviceStyle} className="service-container">
        <h4>My Skills</h4>
        {/* <Slider {...settings}>
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
        </Slider> */}
      </div>

      )


    }
}
