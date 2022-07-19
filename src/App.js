import "./App.css";
import React, { Component } from "react";
import Ternary from "./Ternary";
import FindDom from "./FindDom";
import Form from "./Form";
import About from "./About";
import Home from "./components/Home";
import TT from "./Contact";
import Notfound from './404'  
import Hooks from './Hooks'
import Main from './components/Main'
import ClassCom from './components/class/Class';
import FuncCOm from './components/function/Function'
import { Route, Routes,Link,NavLink, Switch, BrowserRouter as Router } from 'react-router-dom'  
import StyleCom from "./components/style/Style";
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
      <Router> 
        <ul className="nav">  
          <li>  
            <NavLink to="/" exact activeclassname="active">Home</NavLink>  
          </li>  
          <li>  
            <NavLink to="/main" exact activeclassname="active">Components</NavLink>  
          </li>
          <li>  
            <NavLink to="/about" exact activeclassname="active">About</NavLink>  
          </li>  
          
          <li>  
            <NavLink to="/contact" exact activeclassname="active">Contact</NavLink>  
          </li>  
          <li>  
            <NavLink to="/hooks" exact activeclassname="active">Hooks</NavLink>  
          </li> 
          <li>  
            <NavLink to="/style" exact activeclassname="active">React CSS</NavLink>  
          </li> 
        </ul>  
        <Routes>
          {/* <div className="App">
            <Form/>
            <p>sdfdsf</p>
            <Ternary name={this.state.data[0].name} />
            <FindDom/>
            <StudentDetails />
            <ul>
            {this.state.data.map((item) => (
              <List data={item} />
            ))}
            </ul>
          </div> */}
          <Route exact="true" path="/" element={<Home />} />  
          <Route path="/about" element={<About/>} />
          <Route path="/style" element={<StyleCom/>} />
          <Route path="/hooks" element={<Hooks/>} />    
          <Route path="/main" element={<Main/>} />    
          <Route path="/class-url" element={<ClassCom/>}/>
          <Route path="/function-url" element={<FuncCOm/>}/>
          <Route path="*" element={<Notfound/>}/>
        </Routes>
      </Router> 
    );
  }
}

// class StudentDetails extends React.Component {
//   render() {
//     return (
//       <div>
//         <p>Student details</p>
//       </div>
//     );
//   }
// }

// class List extends React.Component {
//   render() {
//     return (
//         <li>{this.props.data.name}</li>
//     );
//   }
// }


export default App;
