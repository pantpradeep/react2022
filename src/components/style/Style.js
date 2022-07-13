import React, { Component } from "react";
import styles from '../../styles/mystyle.module.css';
import '../../styles/style.css';
import "../../App.css";
class StyleCom extends React.Component {
  constructor() {
    super();

  }
  
  render() {
    // Css by java script object
    const mystyle = {
      color:"red"
    }
    return (
      <div className="style">
        <h1 className="blockHeading">React CSS</h1>
        <h2 style={{color: "Green"}}>the style in green text is coming from inline css</h2>
        <h3 style={mystyle}>the style in is coming from style object</h3>
        <h4 className={styles.mystyle}>the style in is coming from <strong>mystyle.module.css</strong></h4>
        <h5 className="mystyle">the style in is coming from <strong>style.css</strong></h5>
      </div>
    );
  }
}

export default StyleCom;
