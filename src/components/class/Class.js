
import React, { Component } from "react";
import "../../App.css";
import List from "./List";
import Single from "./Single";
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
            ],
            displayBio: true 
            
        }
        this.changeState = this.changeState.bind(this)
    }
    changeState() {
        this.setState({displayBio:!this.state.displayBio})
    }
  render() {
    return (
     <div>
         
        <h2>Hi, I am a Class Component! also known as a stateful component because they can hold or manage local state.</h2>
        <h3>Below list is from states (map function)</h3>
        <ul>
            {this.state.data.map((item) => <List data={item}/>)}
        </ul>
        <div class="block">
            <h3>Changing the State</h3>
            <p>In below we are changing state by click on readmore button</p>
            {  
                this.state.displayBio ? (
                    <p>When displayBio state is <strong>true</strong></p>
                    ) : (  
                        <p>  
                            When displayBio state is <strong>false</strong>
                        </p>  
                    )  
            }
            <div>  
                <button onClick={this.changeState}> Read More </button>  
            </div>
        </div>
        <Single name="Raju"/>
     </div>
    );
  }
}


export default Test;
