import React, { Component } from 'react';
import './css/styles.css';
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';



 class Home extends Component {
      
    // Init animation library
    componentDidMount(){
        AOS.init({
          duration : 2000
        })
      }


    render() {
        return (
            <section>
            <div className="container" id="cta">
                <h1 data-aos="fade-right">Welcome to the World of Software Designers</h1>
                <p data-aos="fade-right">Let us dive into you idea and build a concept</p>
                <a className="waves-effect waves-light btn" data-aos="fade-right"><i className="material-icons right">fiber_manual_record</i>Learn more</a>
            </div>
            <div className="container" id="sub-section" data-aos="zoom-in-up">
              <p>We create and design software. We are also UX and UI designers. Whatever your vision is, we can convert it into design.</p>
              <Link to="/team" className="waves-effect waves-light btn">Meet Team</Link>
            </div>
            <div className="container" id="project-request" data-aos="zoom-in-up">
                <p>Do you have a project?</p>
                <p>Let's work together!</p>
            </div>
            <div className="container row" id="journey" data-aos="zoom-in-up">
                <div className="col s6" id="dev-path">
                    <p>
                    Are you a developer that needs help to complete an existing project? We've got you covered. Use the button below.
                    </p>
                    <div>
                      <Link to="/developer" className="waves-effect waves-light btn">Developer</Link>
                    </div>
                    <div>
                      <Link to="/developer" className="waves-effect waves-light btn"><i className="material-icons right">fiber_manual_record</i>Learn more</Link>
                    </div>
                </div>
                <div className="col s6" id="client-path">
                    <p>
                    Are you a client who wants to start a brand new project and you don't know where to start? We've got you covered. Use the button below.
                    </p>
                    <div>
                      <Link to="/client" className="waves-effect waves-light btn">Client</Link>
                    </div>
                    <div>
                      <Link to="/client" className="waves-effect waves-light btn"><i className="material-icons right">fiber_manual_record</i>Learn more</Link>
                    </div>
                   
                </div>
            </div>
            </section>
        )
    }
}



export default Home;