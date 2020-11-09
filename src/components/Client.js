import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import thetalkative from './images/Talkative-logo-client-page-01.png';
import tendercrown from './images/Tender-Crown-logo-client-pg-01.png';
import togetherasone from './images/together-logo-client-page-01.png';
import deron from './images/Deron-logo-client-page-01.png';

 class Client extends Component {

/**
  * Create a div that holds all the images 
  * OnClick let individual images enlarge
  * Set an event listener on a button on the right hand side
  * Implement the stack data structure
  *
  */
    render() {
        return (
            <div className="container" id="client-journey">
            <h1>Start <span>a new project</span></h1>
            <p>Before you start the journey, have a look at some of the work we have done.</p>
                   <div id="client-showcase">
                        <div className="client">
                            <img src={thetalkative} data-aos="fade-right" alt="some of our happy clients" />
                        </div>
                        <div className="client">
                            <img src={tendercrown} data-aos="fade-right" alt="some of our happy clients"/>
                        </div>
                        <div className="client">
                            <img src={togetherasone} data-aos="fade-right" alt="some of our happy clients"/>
                        </div>
                        <div className="client">
                          <img src={deron} data-aos="fade-right" alt="some of our happy clients"/> 
                        </div>
                      <i className="material-icons right">fiber_manual_record</i>
                    </div>
                <div id="client-contact">
                  <Link to="/contact" className="waves-effect waves-light btn" data-aos="fade-right">Contact us</Link>
                </div> 
            </div>
        )
     
}

 }
export default Client;