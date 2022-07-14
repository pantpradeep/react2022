
import React, { Component } from "react";

import List from "./List";
class Test extends React.Component {
    constructor() {
        super();
        this.state = {
            data:[
                {
                    name: 'raju'
                },
                {
                    name: 'ggg'
                }
            ]
            
        }
    }
  render() {
    return (
     <div>
        <h2>Hi, I am a Class Component! also known as a stateful component because they can hold or manage local state.</h2>
        <h3>Below list is from states (map function)</h3>
        <ul>
            {this.state.data.map((item) => <List data={item}/>)}
        </ul>
        
     </div>
    );
  }
}


export default Test;
