import "./App.css";
import React, { Component } from "react";
class Form extends React.Component {
  constructor() {
    super();
    this.state = { value :''}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({value:e.target.value})
  }
  handleSubmit(e){
    alert('You have submitted the input successfully: ' + this.state.value);  
    e.preventDefault();  
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>  
            <h1>Controlled Form Example</h1>  
            <label>  
                Name:  
                <input type="text" value={this.state.value} onChange={this.handleChange} />  
            </label>  
            <input type="submit" value="Submit" />  
         </form>  
      </div>
    );
  }
}

export default Form;
