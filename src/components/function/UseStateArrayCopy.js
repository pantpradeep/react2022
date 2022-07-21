import React, { useState, useEffect  } from "react";
import "../../App.css"
const UseStateArray = () => {
    const myBioData = [
        {
            id:0, myName:"Binod", age:Math.floor(Math.random() * 50)
        },
        {
            id:1, myName:'Pradhan', age:Math.floor(Math.random() * 50)
        },
        {
            id:2, myName:'Deepak', age:Math.floor(Math.random() * 50)
        }
    ]
    const [myArray, setMyArray] = useState(myBioData)

    const clearData = () =>{
        setMyArray([])
    }
    const removeElem = (id) => {
        const myNewArray = myArray.filter((curElem)=>{
            return curElem.id !=id;
        })
        setMyArray(myNewArray);
    }
    return (
        <>
        test
            {
                myArray.map((curElem) => {return (
                <h2 className="todo">Name: {curElem.myName} age: {curElem.age} <button className="remove" onClick={() => removeElem(curElem.id)}>remove</button></h2>
                ) }
                )
            }
            <button onClick={clearData}>Clear</button>
        

        </>
    )
}

export default UseStateArray;