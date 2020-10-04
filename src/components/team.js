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
               <section id="the-team">
                   <div data-aos="zoom-in-right">
                     <img src={Cecil} alt="Software-engineer-profile"/>
                     <p>Software Engineer</p>
                   </div>
                   <div data-aos="zoom-in-right">
                     <img src={Evelyn} alt="UX-Designer-profile"/>
                     <p>UX & UI Designer</p>
                   </div>
                   <div data-aos="zoom-in-right">
                     <img src={Cecil} alt="Software-engineer-profile"/>
                     <p>Graphics Designer</p>
                   </div>
                   <div data-aos="zoom-in-right">
                    <img src={Evelyn} alt="UX-Designer-profile"/>
                     <p>Front End Developer</p>
                   </div>
                  
               </section>
               <section id="team-page">
                 <div>
                    <h1>Meet the Team</h1>
                </div>
                <div>
                  <Link to="/contact" className="waves-effect waves-light btn">Contact us</Link>
                </div>
                   
               </section>
            
            </div>
        )
    }
}


export default Team;