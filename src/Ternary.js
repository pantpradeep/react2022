import "./App.css";
import React, { Component } from "react";

class Ternary extends React.Component {
  constructor(){
    super();
    this.state={
      displayBio:true
    
    }
  }
  render(){
    const bio = this.state.displayBio ? (<div>test</div>) : null;
    return (  
        <div>  
            <h1> Welcome to JavaTpoint!! </h1>  
            { bio }   
        </div>  
      );  

  }
}
export default Ternary;
