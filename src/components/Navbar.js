import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './css/styles.css';
import logo from './images/the-talkertive-logo.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

 class Navbar extends Component {
    
       componentDidMount(){
        AOS.init({
          duration : 2000
        })
      }

    render() {
        return (
           
                <nav id="custom-nav">
                    <div className="nav-wrapper container"><img src={logo} data-aos="zoom-in-right"/>
                    <Link to="/" className="brand-logo" data-aos="zoom-in-right">The Talkertive</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                       <li>
                          <Link to="/about">About</Link>
                        </li>
                        <li>
                          <Link to="/team">Meet Team</Link>
                        </li>
                        <li>
                          <Link to="/developer">Developer</Link>
                        </li>
                        <li>
                          <Link to="/client">Client</Link>
                        </li>
                    </ul>
                    </div>
                </nav>
           
        )
    }
}

export default Navbar;