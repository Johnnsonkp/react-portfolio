import React from 'react'
import './ContactForm.css'



class ContactForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            submitMessage: " ",
            name: "",
            subject: "",
            email: "",
            message: "",
            
        }
    }
    
    onFormSubmit = (event) => {
        // event.preventDefault()
        const {name, subject, email, message} = this.state
        let values = [name, subject, email, message]
        let count = 0;

        console.log(name, subject, email, message)
        values.forEach((value) => {
            console.log(value)
            if(value === "" || null ){
                event.preventDefault()
                return this.setState({ submitMessage: "An input is missing a value"})
            }
            else{
                count ++
            }
        })
        if(count === values.length ){
            formSpree()
            this.setState({ submitMessage: 'Email succesfully sent'})
            setTimeout(function() {window.location.reload()}, 1500)

        }

        //form spree
        function formSpree(){
            window.addEventListener("DOMContentLoaded", function() {

                // get the form elements defined in your form HTML above
                
                var form = document.getElementById("my-form");
                // var button = document.getElementById("my-form-button");
                var status = document.getElementById("status");
            
                // Success and Error functions for after the form is submitted
                
                function success() {
                alert("Message sent, Thank you!")
                form.reset();
                status.innerHTML = "Message sent, Thank you!";
                }
            
                function error() {
                status.innerHTML = "Oops! There was a problem.";
                }
            
                // handle the form submission event
            
                form.addEventListener("submit", function(ev) {
                    // window.location.reload()
                ev.preventDefault(ev);
                var data = new FormData(form);
                ajax(form.method, form.action, data, success, error);
                });
            });
            
            // helper function for sending an AJAX request
            
            function ajax(method, url, data, success, error) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.setRequestHeader("Accept", "application/json");
            xhr.onreadystatechange = function() {
              if (xhr.readyState !== XMLHttpRequest.DONE) return;
              if (xhr.status === 200) {
                success(xhr.response, xhr.responseType);
              } else {
                error(xhr.status, xhr.response, xhr.responseType);
              }
            };
            xhr.send(data);
            }
        }
        
        
    }

    onInputChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value 
        })
        
    }

    

    render(){
        const {submitMessage, name, subject, email, message} = this.state
        return (
            
            <>
                {submitMessage && <div>{submitMessage}</div>}
                <form className="contact-form" onSubmit={this.onFormSubmit} action="https://formspree.io/f/xdopveao" method="POST" id="my-form">
                    <span className="inline-form">
                        <span className="form-name">
                            <label htmlFor="Name">Name:</label>
                            <input type="text" name="name" id="name" value={name} onChange={this.onInputChange}/>
                        </span>
                        <span className="form-subject">
                            <label htmlFor="subject">Subject:</label>
                            <input type="text" name="subject" id="subject" value={subject} onChange={this.onInputChange}/>
                        </span>
                    </span>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" value={email} onChange={this.onInputChange}/>

                    <label htmlFor="message">Message:</label>
                    <input type="text" name="message" id="message" value={message} onChange={this.onInputChange}/>

                    <input type="submit" id="submit-btn" value="Submit"/>
                </form>
            </>
        )


    }
    
}

export default ContactForm;