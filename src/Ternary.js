import "./App.css";
import React, { Component } from "react";

class Ternary extends React.Component {
  constructor(){
    super();
    this.state={
      displayBio:true
      
    }
    this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  }
  toggleDisplayBio() {
    this.setState({displayBio:!this.state.displayBio})
  }
  render(){
    const bio = this.state.displayBio ? (<div>test <button onClick={this.toggleDisplayBio}> Show Less </button></div>) : (<div>test1 <button onClick={this.toggleDisplayBio}> Show Less </button></div>);
    return (  
        <div>  
            <h1> Welcome to JavaTpoint!! </h1>  
            { bio }   
        </div>  
      );  

  }
}
export default Ternary;
