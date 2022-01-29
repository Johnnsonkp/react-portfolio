import './Contact.css'

import ContactForm from '../../utils/contactForm'
import NavControl from '../../utils/NavControl'
import React from 'react';

// class Contact extends React.Component {
const Contact = () => {


    const section = "#contact"
    
    const IframeStyle = {
        marginTop: "80px",
        width: "100%",
        height: "280px", 
        border: "0px", 
        allowfullscreen: "", 
        loading: "lazy"
    };
    return (
        <section id="contact">

            <div className="overlay-hidden">

            <div className="container">
                <h2 className="header">Get In Touch <hr className="contact-hr"></hr></h2>
                <ContactForm />
            </div>

            <iframe title="google maps" style={IframeStyle} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.9060562009404!2d144.95079931563225!3d-37.81566937975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4ee2d152c5%3A0x38a0908dae999c56!2s220%20Spencer%20St%2C%20Melbourne%20VIC%203000!5e0!3m2!1sen!2sau!4v1623316081622!5m2!1sen!2sau" ></iframe> 

            {/* <div className="circles">
                <NavControl />
            </div>   */}

            </div> 
        </section>
        
    )

    
}

export default Contact;