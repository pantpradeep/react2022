import React, { useState, useEffect  } from "react";
import UseStateArray from "./UseStateArray";
import UseStateObject from "./UseStateObject";
const Hooks = () => {
    // var val = 'pradeep';
    // const changeName = () => {
    //     val='Seema';
    //     console.log(val);
    // }

    // console.log(val);
    
    const [myName, setMyName] = useState('Pradeep Pant');
    const changeName = () => {
       setMyName('Seema Jauhari');
    }
    useEffect(() => {
        console.log("1")
      }, []);
    return (
        <div>
            {/* <h1>Name: { val }</h1> */}
            {/* <button onClick={changeName}>Change name</button> */}

            {/* <p>here we are changing text by useState</p>  */}
            <p>Name: <strong>{ myName }</strong></p> 
            <button onClick={changeName}>Click me to change name</button>
            <UseStateArray/>
            <UseStateObject/>

        </div>
    )
}

export default Hooks;