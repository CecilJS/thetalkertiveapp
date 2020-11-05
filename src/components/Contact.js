import React, { Component } from 'react';
import './css/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

 class Contact extends Component {

    // Init animation library
    componentDidMount(){
        AOS.init({
          duration : 2000
        })
      }


    render() {
        return (
        <section className="container" id="contact-page" data-aos="zoom-in-right">
        <section className="row">
        <section className="col l12 m12 s12">
            <h1>How can we <span id="contact-heading"><br/>help?</span></h1>
              <p>We are really delighted that you have chosen to work with us. Simply drop us an email and we will get in touch.</p>
                 <section  id="contact-path">
                  <section className="row">
                    <section className="col l6 m12 s12" id="direct-path">
                            <h2>Ready to collaborate?</h2>
                            <p>Email us</p>
                            <p>collaborate@thetalkertive.co.uk</p>   
                            
                    </section>
                    
                    <section className="col l6 m12 s12" id="help-path">
                            <h2>Ready to start a new project?</h2>
                            <p>Email us</p>
                            <p>info@thetalkertive.co.uk</p>   
                            
                    </section>
                    </section>
                </section>
            </section>   
          </section>         
        </section>
        )
    }
}

export default Contact;