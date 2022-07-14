import "./App.css";
import React, { Component } from "react";
import Ternary from "./Ternary";
import FindDom from "./FindDom";
import Form from "./Form";
import About from "./About";
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
            <NavLink to="/" exact activeClassName="active">Home</NavLink>  
          </li>  
          <li>  
            <NavLink to="/about" exact activeClassName="active">About</NavLink>  
          </li>  
          <li>  
            <NavLink to="/main" exact activeClassName="active">Components</NavLink>  
          </li> 
          <li>  
            <NavLink to="/contact" exact activeClassName="active">Contact</NavLink>  
          </li>  
          <li>  
            <NavLink to="/hooks" exact activeClassName="active">Hooks</NavLink>  
          </li> 
          <li>  
            <NavLink to="/style" exact activeClassName="active">React CSS</NavLink>  
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
          <Route exact  path="/" element={<TT />} />  
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
