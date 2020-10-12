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
                            <li><Link to="/">Terms and Conditions</Link></li>
                          </ul>
                  
                      </div>
                      <div className="col l4 m12 s12">
                        <a href="#!"><i className="material-icons left">facebook</i></a>
                        <a  href="#!"><i className="material-icons left">facebook</i></a>
                        <a  href="#!"><i className="material-icons left">facebook</i></a>
                      </div>
                    </section>
                </footer>
        )
    }
}


export default Footer;