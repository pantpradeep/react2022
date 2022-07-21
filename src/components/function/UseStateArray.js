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
    const clearArray = () => {
        setMyArray([]);
    }
    const removeElem = (id) => {
        // alert(id);
        const myNewArray =  myArray.filter((curElem)=>{
            return curElem.id != id;
        })
        setMyArray(myNewArray);
    }
    return (
        <>
            
            {/* <h2>Name: Binod & Age: 26</h2> */}
            {
                // bioData.map((curElem)=>{
                //     return <h2>Name: {curElem.myName} & Age: {curElem.age}</h2>
                // })

                myArray.map((curElem)=> 
                    {
                        return(
                            <h2 className="todo" key={curElem.id}>Name: {curElem.myName} & Age: {curElem.age} <button className="btnInner" onClick={() => removeElem(curElem.id)}>Remove</button></h2>
                            
                        )
                    }
                )
            }
            <button onClick={clearArray}>Clear above list</button>

        </>
    )
}

export default UseStateArray;