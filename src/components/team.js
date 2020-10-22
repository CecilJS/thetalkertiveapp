import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Cecil from './images/Cecil-profile-icon.png';
import Evelyn from './images/Evelyn-profile-icon.png';
import Somi from './images/Somi-profile-icon.png';
import Hayley from './images/Hayley-profile-icon.png';
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
                    <p>As a group, we are never short of ideas. <br/> We tackle every challenge through teamwork.</p>
                </div>
                <div>
                  <Link to="/contact" className="waves-effect waves-light btn" data-aos="fade-right">Contact us</Link>
                </div>     
               </section>
               <section id="the-team">
                   <article className="team-mates" data-aos="zoom-in-right">
                     <img src={Cecil} data-aos="zoom-in-right" alt="Software-engineer-profile"/>
                     
                        <p>Cecil</p>
                        <p>Software Engineer</p>
                  
                     
                   </article>
                   <article className="team-mates"  data-aos="zoom-in-right">
                     <img src={Evelyn} data-aos="zoom-in-right" alt="UX-Designer-profile"/>
                    
                        <p>Evelyn</p>
                        <p>UX & UI Designer</p>
                      
                 
                   </article>
                   <article className="team-mates" data-aos="zoom-in-right">
                     <img src={Somi} data-aos="zoom-in-right" alt="Software-engineer-profile"/>
                     
                        <p>Somi</p>
                        <p>Graphics Designer</p>
                       
                   
                   </article>
                   <article className="team-mates" data-aos="zoom-in-right">
                    <img src={Hayley} data-aos="zoom-in-right" alt="UX-Designer-profile"/>
                   
                        <p>Hayley</p>
                        <p>Front End Developer</p>
                 
                   </article>
                  
               </section>
            </div>
        )
    }
}


export default Team;