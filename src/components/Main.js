import "../App.css";
import React, { Component } from "react";

import { Route, Routes,Link,NavLink, Switch, BrowserRouter as Router } from 'react-router-dom'  

class Main extends React.Component {

  render() {
    return (
      <div>
        <ul className="">  
          <li>
            <NavLink to="/class-url" exact activeClassName="active">Class Component</NavLink>  
          </li>
          <li>
            <NavLink to="/function-url" exact activeClassName="active">function Component</NavLink> 
          </li>
        </ul>
      </div>
    );
  }
}




export default Main;
