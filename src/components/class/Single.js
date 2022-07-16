import React, { Component } from "react";

class Single extends React.Component {  
    render() {  
    return (
        <div>
            <h2>This is also a class component</h2>
            <p>this <strong>{this.props.name}</strong> coming from props</p>
            
        </div>
    )
    }
}

export default Single;