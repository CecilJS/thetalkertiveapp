import React, { Component } from 'react';
 
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ourCore = ['Software Engineers', 'UX Designers', 'Graphic Designers', 'Web Developers'];
const ourCoreAnimation = ['zoom-in-up', 'zoom-in', 'zoom-in-down', 'zoom-out-up'];
let count = 0;

class Home extends Component {

  state = {
    moreInfo: false,
    theCore: ourCore[0],
    theAnimation: ourCoreAnimation[0]
  }

  showMore = () => {

    this.setState({
      moreInfo: !this.state.moreInfo
    })
  }
      
    // Init animation library
    componentDidMount(){
        AOS.init({
          duration : 2000
        })

        setTimeout(()=>{
          this.updateCta();
          setInterval(this.updateCta,5000);
      }, 2500);
      
      }

      //Clear the funtion when unmounted

     
     

      // Function that updates state with either of the values of ourCore every 5 seconds
     updateCta = ()=> {
      count++;
      if(count >= ourCore.length){

        count = 0;
       }

      this.setState({
        theCore: ourCore[count],
        theAnimation: ourCoreAnimation[count]
       
      })

       }

     

    render() {

      // Destructuring for use inside JSX
      const {moreInfo, theCore, theAnimation } = this.state
      
        return (
            <section >
            <div className="container row" id="cta" >
              <div className="col l12 m12 s12">
                <h1>Welcome to the world of <span data-aos={theAnimation} id="ourCore">{theCore}</span></h1>
                <p data-aos="fade-right">Let us dive into your idea and build a concept</p>
                <button className="waves-effect waves-light btn" data-aos="fade-right" onClick={this.showMore}><i className="material-icons right">fiber_manual_record</i>Learn more</button>
                {moreInfo ? (<p id="learn-more" data-aos="zoom-in-right"> 
                Our team of technical giants, from UX designers to software engineers, will bring your idea to reality. 
                We strive to understand your needs and keep you involved each step of the way, right from conception through to deployment. We can help you.</p>): null}
              </div>
            </div>
            <div className="container row" id="sub-section" data-aos="zoom-in-up">
              <div className="col l12 m12 s12">
              <p>We create and design software. We are also UX and UI designers. Whatever your vision is, we can convert it into design.</p>
              <Link to="/team" className="waves-effect waves-light btn">Meet The Team</Link>
              </div>
            </div>
              <div className="container row" id="project-request" data-aos="zoom-in-up">
                <div className="col l12 m12 s12">
                  <p>Do you have a project?</p>
                  <p>Let's work together!</p>
                </div>
              </div>
              <div className="container row" id="journey" data-aos="zoom-in-up">
                  <div className="col l6 m12 s12" id="dev-path">
                      <p>
                      Are you a developer that needs help to complete an existing project? We've got you covered. Use the button below.
                      </p>
                      <div>
                        <Link to="/developer" className="waves-effect waves-light btn" id="path-one">Developer</Link>
                      </div>
                     
                  </div>
                  <div className="col l6 m12 s12" id="client-path">
                      <p>
                      Do you want to start a new project and don't know where to start? We've got you covered. Use the button below.
                      </p>
                      <div>
                        <Link to="/client" className="waves-effect waves-light btn" id="path-two">Client</Link>
                      </div>
                    
                  </div>
                </div>
            </section>
        )
    }
}



export default Home;