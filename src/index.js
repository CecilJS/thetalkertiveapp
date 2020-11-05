import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import 'materialize-css/dist/css/materialize.min.css';




ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

