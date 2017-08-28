import React, { Component } from 'react';
//import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';
import Header from '../header/Header.js';

class App extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div className="container-fluid">
        <Header />
      </div>
    );
  }
}

export default App;
