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
                 <div data-aos="fade-right">
                    <h1>Meet the Team</h1>
                </div>
                <div>
                  <Link to="/contact" className="waves-effect waves-light btn" data-aos="fade-right">Contact us</Link>
                </div>     
               </section>
               <section id="the-team">
                   <div className="team-mates" data-aos="zoom-in-right">
                     <img src={Cecil} data-aos="zoom-in-right" alt="Software-engineer-profile"/>
                      <div className="team-mates-details">
                        <p>Cecil</p>
                        <p>Software Engineer</p>
                        
                      </div>
                     
                   </div>
                   <div className="team-mates"  data-aos="zoom-in-right">
                     <img src={Evelyn} data-aos="zoom-in-right" alt="UX-Designer-profile"/>
                     <div className="team-mates-details">
                        <p>Evelyn</p>
                        <p>UX & UI Designer</p>
                      
                      </div>
                   </div>
                   <div className="team-mates" data-aos="zoom-in-right">
                     <img src={Cecil} data-aos="zoom-in-right" alt="Software-engineer-profile"/>
                     <div  className="team-mates-details">
                        <p>Somi</p>
                        <p>Graphics Designer</p>
                       
                      </div>
                   </div>
                   <div className="team-mates" data-aos="zoom-in-right">
                    <img src={Evelyn} data-aos="zoom-in-right" alt="UX-Designer-profile"/>
                     <div  className="team-mates-details">
                        <p>Hayley</p>
                        <p>Front End Developer</p>
                       
                      </div>
                   </div>
                  
               </section>
            </div>
        )
    }
}


export default Team;