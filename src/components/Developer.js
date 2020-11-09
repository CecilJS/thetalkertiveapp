import React, { Component } from 'react';
import { Link } from "react-router-dom";
import cecilProfilePicture from './images/Cecil-icon-01-01-md.png';
import evelynProfilePicture from './images/Evelyn-icon-01-01-md.png';
import somiProfilePicture from './images/Somi-icon-01-01-md.png';
import hayleyProfilePicture from './images/Hailey-icon-01-01-md.png';


 class Developer extends Component {

 
    render() {
        return (
            <div className="container" id="developer-path">
                <h1><span>Let's</span> Collaborate</h1>
                   <div id="dev-showcase">
                        <div>
                            <img src={somiProfilePicture} data-aos="fade-right" alt="We work better together"/>
                        </div>
                        <div>
                            <p>Graphic<br/> Design</p>
                        </div>
                        <div>
                            <p>UI/UX <br/>Design</p>
                        </div>
                        <div>
                            <img src={evelynProfilePicture} data-aos="fade-right" alt="We work better together"/>
                        </div>
                        <div>
                            <img src={hayleyProfilePicture} data-aos="fade-right" alt="We work better together"/>
                        </div>
                        <div>
                          <p>Web <br/>Development</p>
                        </div>
                        <div>
                          <p>Software <br/>Engineering</p>
                        </div>
                        <div>
                          <img src={cecilProfilePicture} data-aos="fade-right" alt="We work better together"/> 
                        </div>
                          
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