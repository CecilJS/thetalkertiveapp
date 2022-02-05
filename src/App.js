import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Navbar from './client/Navbar';
import Home from './client/Home';
import About from './client/About';
import Developer from './client/Developer';
import Client from './client/Client';
import Contact from './client/Contact';
import Team from './client/Team';
import Footer from './client/Footer';
import Privacy from './client/Privacy';







 class App extends Component {
  render() {
    return (
      
    <div>

       <Navbar/>
      
      <Switch>
        
        <Route exact path="/" component={Home}>
       
        </Route>
        <Route exact path="/home" component={Home}>
       
       </Route>
        <Route path="/about" component={About}>
         
        </Route>
        <Route path="/developer" component={Developer}>
        
        </Route>
        <Route path="/client" component={Client}>
        
        </Route>
        <Route exact path="/team" component={Team}>
       
        </Route>
        
        <Route exact path="/contact" component={Contact}>
       
        </Route>
        <Route exact path="/privacy-policy" component={Privacy}>
       
        </Route>
        <Route exact path="/*" component={Home}>
       
        </Route>

      </Switch>
      <Footer/>
    </div>
      
    )
  }
}

export default App;