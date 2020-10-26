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
            <h1>Let's work together</h1>
              <p>We are really delighted that you have chosen to work with us. <br/> Simply drop us an email and we will be in touch.</p>
                 <section className="container" id="contact-path">
                  <section className="row">
                    <section className="col l6 m12 s12" id="direct-path">
                            <h2>Email us</h2>
                            <p><img src="https://img.icons8.com/carbon-copy/40/000000/filled-message.png" alt="social media icon"/>info@thetalkertive.co.uk</p>   
                            
                    </section>
                    <section className="col l6 m12 s12" id="social-path">
                          <h2>Connect with us</h2>
                        <div>
                          <a href="https://twitter.com/TheTalkertivee" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.icons8.com/color/40/000000/twitter-circled.png" alt="twitter-social-media-icon"/>
                          </a>
                          <a  href="https://www.linkedin.com/company/28174397/admin/" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.icons8.com/color/40/000000/linkedin-circled.png" alt="linkedin-social-media-icon"/>
                          </a>
                            
                        </div>
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