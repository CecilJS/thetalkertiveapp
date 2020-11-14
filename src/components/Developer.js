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

    state = {
        graphicsDetail: true,
        uxDetail: true,
        webDev: true,
        softwareEng: true
    }

    toggleGraphics = () => {
        this.setState({
            graphicsDetail: !this.state.graphicsDetail
             })
          }

    toggleUX = () => {
        this.setState({
            uxDetail: !this.state.uxDetail
            })
        }

    toggleWeb = () => {
        this.setState({
           webDev: !this.state.webDev
        })    
      }

    toggleSoftwareEng = () => {
        this.setState({
            softwareEng: !this.state.softwareEng
        })
        
      } 
    
 
    render() {

        const {graphicsDetail, uxDetail, webDev, softwareEng } = this.state;
        return (
            <div className="container" id="developer-path">
                <h1><span>Let's</span> Collaborate</h1>
                   <div id="dev-showcase">
                        <div>
                            <picture data-aos="fade-right">
                                <source media="(max-width: 576px)" srcSet={somiSmProfilePicture} alt="We work better together"/>
                                <source media="(max-width: 992px)" srcSet={somiXmdProfilePicture} alt="We work better together" />
                                <img src={somiProfilePicture}  data-aos="fade-right" alt="We work better together"/>
                            </picture>
                        </div>
                        <div onClick={this.toggleGraphics}>
                           {graphicsDetail ? (<p data-aos="fade-right">Graphic<br/> Design</p>) : 
                            (
                            <div className="skills-heading" data-aos="fade-right">
                                <h2>Field of Expertise</h2>
                            <ul className="skill-set" data-aos="fade-right">
                                <li>Logo Design</li>
                                <li>Business Cards</li>
                                <li>Signage Design</li>
                            </ul>
                            </div>)
                           }
                        </div>
                        <div onClick={this.toggleUX}>
                           {uxDetail ? (<p>UI/UX <br/>Design</p>) :
                            (
                            <div className="skills-heading" data-aos="fade-right">
                                <h2>Field of Expertise</h2>
                            <ul className="skill-set" data-aos="fade-right">
                               
                                <li>Prototyping</li>
                                <li>Illustration </li>
                                <li>User Research</li>
                                <li>Information Architecture </li>

                            </ul>
                            </div>)
                           }
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
                        <div onClick={this.toggleWeb}>
                          {webDev ? (<p>Web <br/>Development</p>) : (
                            <div className="skills-heading" data-aos="fade-right">
                                <h2>Field of Expertise</h2>
                            <ul className="skill-set" data-aos="fade-right">
                                <li>Web Design</li>
                                <li>E-commerce</li>
                                <li>Web Development</li>
                            </ul>
                            </div>
                          )}
                        </div>
                        <div onClick={this.toggleSoftwareEng}>
                          {softwareEng ? (<p>Software <br/>Engineering</p>) : (
                            <div className="skills-heading" data-aos="fade-right">
                                <h2>Field of Expertise</h2>
                            <ul className="skill-set" data-aos="fade-right">
                                <li>Mobile Apps</li>
                                <li>Systems Design</li>
                                <li>Web Applications</li>
                                <li>Desktop Applications</li>
                            </ul>
                            </div>
                          )}
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