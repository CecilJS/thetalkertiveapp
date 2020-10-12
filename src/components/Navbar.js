import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './css/styles.css';
import logo from './images/the-talkertive-logo.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

 class Navbar extends Component {
    state = {
      showNavItems: false

    }

    //Event to toggle the navitems
      toggleEvent =()=>{

        this.setState({
          showNavItems: !this.state.showNavItems
        });
      }
   


       componentDidMount(){
        AOS.init({
          duration : 2000
        })
      }



    render() {

      const {showNavItems} = this.state;
        return (
           
                <nav id="custom-nav">
                    <div className="nav-wrapper"><Link to="/"><img src={logo} data-aos="zoom-in-right" alt="the-talkertive-logo"/></Link>
                       <Link to="/" id="brand" data-aos="zoom-in-right">The Talkertive</Link>
                   {showNavItems ? ( <ul id="nav-mobile" className="right" >
                       <li>
                          <Link to="/about" data-aos="zoom-in-left">About</Link>
                        </li>
                        <li>
                          <Link to="/team" data-aos="zoom-in-left">Meet The Team</Link>
                        </li>
                        <li>
                          <Link to="/developer" data-aos="zoom-in-left">Developer</Link>
                        </li>
                        <li>
                          <Link to="/client" data-aos="zoom-in-left">Client</Link>
                        </li>
                        <li>
                          <Link to="/contact" data-aos="zoom-in-left">Contact</Link>
                        </li>
                       </ul>) : null}
                    </div>
                    <div className="right" id="toggler" onClick={this.toggleEvent}>
                      <div>
                      </div>
                      <div>  
                      </div>
                    </div>
                </nav>
           
        )
    }
}

export default Navbar;