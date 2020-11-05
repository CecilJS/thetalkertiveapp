import React, { Component } from 'react';
import { Link } from "react-router-dom";

 class Developer extends Component {

 
    render() {
        return (
            <div className="container" id="developer-path">
                <h1><span>Let's</span> Collaborate</h1>
                <div className="carousel">
                        <a className="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1"/></a>
                        <a className="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2"/></a>
                        <a className="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3"/></a>
                        <a className="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4"/></a>
                        <a className="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5"/></a>
                    </div>
                    <div>
                    <h2>Benefits of Collaboration</h2>
                    <p>Inspiration | Knowledge | Teamwork</p>
                    </div>
                <div id="client-contact">
                  <Link to="/contact" className="waves-effect waves-light btn" data-aos="fade-right">Contact us</Link>
                </div> 
            </div>
        )
    }
}

export default Developer;