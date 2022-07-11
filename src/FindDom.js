import React, { Component } from "react";
import ReactDOM from 'react-dom';  
class Finddom extends React.Component{
    constructor(){
        super();
        this.findDomNode = this.findDomNode.bind(this);  
    }
    findDomNode() {
        var domnode = document.getElementById('textColor');
        ReactDOM.findDOMNode(domnode).style.color="red";
    }
    render(){
        return (
            <div>
                <p id="textColor">after click this text color will be change</p>
                <button onClick={this.findDomNode}>Change text color</button>
            </div>
        )
    }
}
export default Finddom;