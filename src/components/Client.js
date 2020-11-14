import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import thetalkative from './images/Talkative-logo-client-page-01.png';
import tendercrown from './images/Tender-Crown-logo-client-pg-01.png';
import togetherasone from './images/together-logo-client-page-01.png';
import deron from './images/Deron-logo-client-page-01.png';

const imageShuffle = [thetalkative, tendercrown, togetherasone,  deron];
let count = 0;

 class Client extends Component {

  state = {
  imageOne : imageShuffle[0],
  imageTwo : imageShuffle[1],
  imageThree : imageShuffle[2],
  imageFour: imageShuffle[3]

  }



/**
  * Create a div that holds all the images 
  * OnClick let individual images enlarge
  * Set an event listener on a button on the right hand side
  * Implement the stack data structure
  *
  */

shuffleBtn = ()=> {
  count++;
  if(count >= imageShuffle.length){

    count = 0;
   }

 if( count === 1){

  this.setState({
    imageOne : imageShuffle[count],
    imageTwo : imageShuffle[count + 1],
    imageThree : imageShuffle[count + 2],
    imageFour: imageShuffle[ count - 1]
    
  })
 } else if (count === 2){

  this.setState({
    imageOne : imageShuffle[count],
    imageTwo : imageShuffle[count + 1],
    imageThree : imageShuffle[count - 2],
    imageFour: imageShuffle[ count - 1]
    
  })
 } else if(count === 3){

  this.setState({
    imageOne : imageShuffle[count],
    imageTwo : imageShuffle[count - 3],
    imageThree : imageShuffle[count - 2],
    imageFour: imageShuffle[ count - 1]
    
  })
 }else if (count === 0){

  this.setState({
    imageOne : imageShuffle[count],
    imageTwo : imageShuffle[count + 1],
    imageThree : imageShuffle[count + 2],
    imageFour: imageShuffle[ count + 3]
    
  })
 }
  
}

    render() {

    const { imageOne, imageTwo, imageThree, imageFour} = this.state
        return (
            <div className="container" id="client-journey">
            <h1>Start <span>a new project</span></h1>
            <p>Before you start the journey, have a look at some start-ups we've worked with.</p>
                   <div id="client-showcase">
                        <div className="client">
                          <img src={imageOne} data-aos="fade-right" alt="some of our happy clients"/>
                        </div>
                        <div className="client">
                            <img src={imageTwo} data-aos="fade-right" alt="some of our happy clients"/>
                        </div>
                        <div className="client">
                            <img src={imageThree} data-aos="fade-right" alt="some of our happy clients"/>
                        </div>
                        <div className="client">
                          <img src={imageFour} data-aos="fade-right" alt="some of our happy clients"/> 
                        </div>
                      <i className="material-icons right" onClick={this.shuffleBtn}>fiber_manual_record</i>
                    </div>
                <div id="client-contact">
                  <Link to="/contact" className="waves-effect waves-light btn" data-aos="fade-right">Contact us</Link>
                </div> 
            </div>
        )
     
}

 }
export default Client;