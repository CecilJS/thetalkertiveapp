import React, { Component } from 'react';
import { Link } from "react-router-dom";
import cecilProfilePicture from './images/Cecil-icon-01-01-md.png';
import cecilSmProfilePicture from './images/Cecil-icon-01-01-sm.png';
import cecilXmdProfilePicture from './images/Cecil-icon-01-01-xmd.png';
import evelynProfilePicture from './images/Evelyn-icon-01-01-md.png';
import evelynSmProfilePicture from './images/Evelyn-icon-01-01-sm.png';
import evelynXmdProfilePicture from './images/Evelyn-icon-01-01-xmd.png';
import somiProfilePicture from './images/Somi-icon-01-01-md.png';
import somiSmProfilePicture from './images/Somi-icon-01-01-sm.png';
import somiXmdProfilePicture from './images/Somi-icon-01-01-xmd.png';
import hayleyProfilePicture from './images/Hailey-icon-01-01-md.png';
import hayleySmProfilePicture from './images/Hailey-icon-01-01-sm.png';
import hayleyXmdProfilePicture from './images/Hailey-icon-01-01-xmd.png';


 class Developer extends Component {

 
    render() {
        return (
            <div className="container" id="developer-path">
                <h1><span>Let's</span> Collaborate</h1>
                   <div id="dev-showcase">
                        <div>
                            <picture data-aos="fade-right">
                                <source media="(max-width: 576px)" srcSet={somiSmProfilePicture} alt="We work better together"/>
                                <source media="(max-width: 992px)" srcSet={somiXmdProfilePicture} alt="We work better together" />
                                <img src={somiProfilePicture}  alt="We work better together"/>
                            </picture>
                        </div>
                        <div>
                            <p>Graphic<br/> Design</p>
                        </div>
                        <div>
                            <p>UI/UX <br/>Design</p>
                        </div>
                        <div>
                            <picture data-aos="fade-right">
                                <source media="(max-width: 576px)" srcSet={evelynSmProfilePicture} alt="We work better together"/>
                                <source media="(max-width: 992px)" srcSet={evelynXmdProfilePicture} alt="We work better together" />
                                <img src={evelynProfilePicture} data-aos="fade-right" alt="We work better together"/>
                            </picture> 
                        </div>
                        <div>
                            <picture data-aos="fade-right">
                                <source media="(max-width: 576px)" srcSet={hayleySmProfilePicture} alt="We work better together"/>
                                <source media="(max-width: 992px)" srcSet={hayleyXmdProfilePicture} alt="We work better together" />
                                <img src={hayleyProfilePicture} data-aos="fade-right" alt="We work better together"/>
                            </picture>  
                        </div>
                        <div>
                          <p>Web <br/>Development</p>
                        </div>
                        <div>
                          <p>Software <br/>Engineering</p>
                        </div>
                        <div>
                            <picture data-aos="fade-right">
                                <source media="(max-width: 576px)" srcSet={cecilSmProfilePicture} alt="We work better together"/>
                                <source media="(max-width: 992px)" srcSet={cecilXmdProfilePicture} alt="We work better together" />
                                <img src={cecilProfilePicture} data-aos="fade-right" alt="We work better together"/>
                            </picture>   
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