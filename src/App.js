import "./App.css";
import React, { Component } from "react";
import Ternary from "./Ternary";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          name: "abhishek",
        },
        {
          name: "raju",
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <p>sdfdsf</p>
        <Ternary />
        <StudentDetails />
        <ul>
        {this.state.data.map((item) => (
          <List data={item} />
        ))}
        </ul>
      </div>
    );
  }
}

class StudentDetails extends React.Component {
  render() {
    return (
      <div>
        <p>Student details</p>
      </div>
    );
  }
}

class List extends React.Component {
  render() {
    return (
        <li>{this.props.data.name}</li>
    );
  }
}


export default App;
