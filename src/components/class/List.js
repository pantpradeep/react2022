import React, { Component } from "react";
class List extends React.Component {  
    render() {  
       return (  
          <div>  
             <li>{this.props.data.name}</li> 
          </div>  
       );  
    }  
 }  
 export default List;