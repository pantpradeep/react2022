import "./App.css";
import React, { Component } from "react";
class About extends React.Component {
  constructor() {
    super();

  }
  
  render() {
    // Css by java script object
    const mystyle = {
      color:"red"
    }
    return (
      <div className="App">
        <h1 style={{color: "Green"}}>About</h1>
        <h2 style={mystyle}>Subheading</h2>
      </div>
    );
  }
}

export default About;
