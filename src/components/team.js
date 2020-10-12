import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Cecil from './images/Cecil.jpg';
import Evelyn from './images/Evelyn.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

 class Team extends Component {

 // Init animation library
 componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }

    render() {
        return (
             <div>
             <section id="team-page">
                 <div>
                    <h1>Meet the Team</h1>
                </div>
                <div>
                  <Link to="/contact" className="waves-effect waves-light btn">Contact us</Link>
                </div>     
               </section>
               <section id="the-team">
                   <div className="team-mates" data-aos="zoom-in-right">
                     <img src={Cecil} data-aos="zoom-in-right" alt="Software-engineer-profile"/>
                      <div className="team-mates-details">
                        <p>Software Engineer</p>
                        <p>Bio</p>
                      </div>
                     
                   </div>
                   <div className="team-mates"  data-aos="zoom-in-right">
                     <img src={Evelyn} data-aos="zoom-in-right" alt="UX-Designer-profile"/>
                     <div className="team-mates-details">
                        <p>UX & UI Designer</p>
                        <p>Bio</p>
                      </div>
                   </div>
                   <div className="team-mates" data-aos="zoom-in-right">
                     <img src={Cecil} data-aos="zoom-in-right" alt="Software-engineer-profile"/>
                     <div  className="team-mates-details">
                        <p>Graphics Designer</p>
                        <p>Bio</p>
                      </div>
                   </div>
                   <div className="team-mates" data-aos="zoom-in-right">
                    <img src={Evelyn} data-aos="zoom-in-right" alt="UX-Designer-profile"/>
                     <div  className="team-mates-details">
                        <p>Front End Developer</p>
                        <p>Bio</p>
                      </div>
                   </div>
                  
               </section>
            </div>
        )
    }
}


export default Team;