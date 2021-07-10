import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Cecil from './images/Cecil-profile-icon.png';
import Evelyn from './images/Evelyn-profile-icon.png';
import Somi from './images/Somi-profile-icon.png';
import Hayley from './images/Hayley-profile-icon.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

 class Team extends Component {

  state = {
    firstDisplayedBio: false,
    secondDisplayedBio: false,
    thirdDisplayedBio: false,
    fourthDisplayedBio: false
    
  }

 // Init animation library
 componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }

  /**
   * Create a method that serves as the event handler for displaying of the bio. ---achieved 25.10.2020
   * set initial state to false and use a ternary operator to toggle.
   * Think of using a loop and an if statement to refactor the function
   */

   firstBioDisplay = (e) => {
 
    if(e.target){
      this.setState({
        firstDisplayedBio: !this.state.firstDisplayedBio,
        secondDisplayedBio: false,
        thirdDisplayedBio: false,
        fourthDisplayedBio: false
      })

    }
      
   }

   secondBioDisplay =(e) => {

    if(e.target){
      this.setState({
        firstDisplayedBio: false,
        secondDisplayedBio: !this.state.secondDisplayedBio,
        thirdDisplayedBio: false,
        fourthDisplayedBio: false
      })
    }
    
   }

   thirdBioDisplay = (e) => {
 
    if(e.target){
      this.setState({
        firstDisplayedBio: false,
        secondDisplayedBio: false,
        thirdDisplayedBio: !this.state.thirdDisplayedBio,
        fourthDisplayedBio: false
      })

    }
   
 }

 fourthBioDisplay = (e) => {
 
  if(e.target){
    this.setState({
      firstDisplayedBio: false,
      secondDisplayedBio: false,
      thirdDisplayedBio: false,
      fourthDisplayedBio: !this.state.fourthDisplayedBio
    })
  }
  
}

    render() {

      const {firstDisplayedBio, secondDisplayedBio, thirdDisplayedBio, fourthDisplayedBio } = this.state;

        return (
             <div>
             <section id="team-page">
                 <div data-aos="fade-right">
                    <h1>Meet the Team</h1>
                    <p>As a team, we are never short of ideas. <br/> We tackle every challenge through teamwork.</p>
                </div>
                <div>
                  <Link to="/contact" className="waves-effect waves-light btn" data-aos="fade-right">Contact us</Link>
                </div>     
               </section>
               <section id="the-team">
                   <article data-aos="zoom-in-right" onClick={this.firstBioDisplay}>
                   {!firstDisplayedBio ?(<img src={Cecil} data-aos="zoom-in-right" onClick={this.firstBioDisplay} alt="Software-engineer-profile"/>) : (
                       <div data-aos="zoom-in-right">
                        <p data-aos="zoom-in-right" id="first-team-mate"> 
                            As a Software Engineer, 
                            Cecil is always keen to use his indepth technical 
                            knowledge to solve problems that meet client needs. 
                          </p>
                       </div>
                         ) }
                     
                        <p className="team-mate-title" onClick={this.firstBioDisplay}>Cecil | Software Engineer</p>
                 
                      
                  
                     
                   </article>
                   <article onClick={this.secondBioDisplay}  data-aos="zoom-in-right">
                   {!secondDisplayedBio ? (<img src={Evelyn} data-aos="zoom-in-right" alt="UX-Designer-profile"/>) :(
                          <div data-aos="zoom-in-right">
                            <p data-aos="zoom-in-right" id="second-team-mate">
                              Evelyn is a UX/UI Designer and an Illustrator. 
                              She is always doodling every thought that can be a meaningful idea, 
                              while exploring creative ways to find visual solutions. 
                            </p>
                          </div>
                          ) }
                    
                        <p className="team-mate-title" onClick={this.secondBioDisplay}>Evelyn | UX & UI Designer</p>
                       
                      
                 
                   </article>
                   <article onClick={this.thirdBioDisplay} data-aos="zoom-in-right">
                   {!thirdDisplayedBio ? (<img src={Somi} data-aos="zoom-in-right" onClick={this.thirdBioDisplay} alt="Software-engineer-profile"/>) 
                     : 
                   (      <div data-aos="zoom-in-right">
                            <p data-aos="zoom-in-right"id="third-team-mate">
                            Somi is a meticulous Graphic Designer who is very passionate about design, photography, and aesthetics. 
                            </p>
                          </div>
                          ) }
                     
                        <p className="team-mate-title" onClick={this.thirdBioDisplay}>Somi | Graphics Designer</p>
                         
                   
                   </article>
               </section>
            </div>
        )
    }
}


export default Team;