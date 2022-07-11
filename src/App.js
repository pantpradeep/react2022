import "./App.css";
import React, { Component } from "react";
import Ternary from "./Ternary";
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       data: [
//         {
//           name: "abhishek",
//         },
//         {
//           name: "raju",
//         },
//       ],
//     };
//   }
//   render() {
//     return (
//       <div className="App">
//         <p>sdfdsf</p>
//         <StudentDetails />
//         <ul>
//         {this.state.data.map((item) => (
//           <StudentList data={item} />
//         ))}
//         </ul>
//       </div>
//     );
//   }
// }

// class StudentDetails extends React.Component {
//   render() {
//     return (
//       <div>
//         <p>Student details</p>
//       </div>
//     );
//   }
// }

// class StudentList extends React.Component {
//   render() {
//     return (
      
//         <li>{this.props.data.name}</li>
      
//     );
//   }
// }


class App extends React.Component {

  render(){
    return (
    <div>
      <Ternary />
    </div>
    )
  }
}
export default App;
