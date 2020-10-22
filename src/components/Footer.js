import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            
                <footer className="container" id="copyright-section">
                    <section className="row">
                        <div className="col l4 m12 s12">
                          <p>The Talkertive © Copyright 2020 - All Right Reserved.</p> 
                        </div>
                      <div className="col l4 m12 s12" id="legal-notices">
                          <ul>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                          </ul>
                  
                      </div>
                      <div className="col l4 m12 s12" id="social-media-icons">
                        <a href="https://twitter.com/TheTalkertivee" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/color/40/000000/twitter-circled.png" alt="twitter-social-media-icon"/></a>
                        <a  href="https://www.linkedin.com/company/28174397/admin/" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/color/40/000000/linkedin-circled.png" alt="linkedin-social-media-icon"/></a>
                      </div>
                    </section>
                </footer>
        )
    }
}


export default Footer;