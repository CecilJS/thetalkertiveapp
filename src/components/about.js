import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

 class About extends Component {

     // Init animation library
     componentDidMount(){
        AOS.init({
          duration : 2000
        })
      }

    render() {
        return (
            <div className="container" id="about-content" data-aos="zoom-in-right">
             <section className="row">
                <h1>About Us</h1>
               <section className="col l12 m12 s12">
                  <article id="our-history">
                    <p>
                        The Talkative was established in 2017 as a platform where Software developers, UX designers and Graphic designers collaborate on projects.
                    </p>

                    <p>
                        The software design and development industry is community driven and as a
                        result of such collaborations, great products have emerged. 
                        This is why we developed our platform.
                    </p>

                    <p>
                        If you are looking for software developers and designers for your project, you are at the right place.
                        On the other hand, if you are a developer or UX designer and need someone to work with on your project, by all means, get in touch.
                    </p>
                  </article>

                 </section>   
                </section>
                <Link to="/team" className="waves-effect waves-light btn">Meet The Team</Link>
            </div>
        )
    }
}


export default About;