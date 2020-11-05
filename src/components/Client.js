import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';

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
                   <div className="carousel">
                        <a className="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1"/></a>
                        <a className="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2"/></a>
                        <a className="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3"/></a>
                        <a className="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4"/></a>
                        <a className="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5"/></a>
                    </div>
                <div id="client-contact">
                  <Link to="/contact" className="waves-effect waves-light btn" data-aos="fade-right">Contact us</Link>
                </div> 
            </div>
        )
     
}

 }
export default Client;