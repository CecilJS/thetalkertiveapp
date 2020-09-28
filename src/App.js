import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Developer from './components/Developer';
import Client from './components/Client';
import Team from './components/Team';
import Footer from './components/Footer';







 class App extends Component {
  render() {
    return (
      
    <div>

       <Navbar/>
      
      <Switch>
        <Route exact path="/" component={Home}>
       
        </Route>
        <Route path="/about" component={About}>
         
        </Route>
        <Route path="/developer" component={Developer}>
        
        </Route>
        <Route path="/client" component={Client}>
        
        </Route>
        <Route exact path="/team" component={Team}>
       
        </Route>
      </Switch>
      <Footer/>
    </div>
      
    )
  }
}

export default App;