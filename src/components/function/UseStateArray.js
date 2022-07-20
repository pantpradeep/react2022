import React, { useState, useEffect  } from "react";

const UseStateArray = () => {
    const myBioData = [
        {
            id:0, myName:"Binod", age:26
        },
        {
            id:1, myName:'Pradhan', age:27
        }
    ]
    const [myArray, setMyArray] = useState(myBioData)
    const clearArray = () => {
        setMyArray([]);
    }
    return (
        <>
            
            {/* <h2>Name: Binod & Age: 26</h2> */}
            {
                // bioData.map((curElem)=>{
                //     return <h2>Name: {curElem.myName} & Age: {curElem.age}</h2>
                // })

                myArray.map((curElem)=> <h2 key={curElem.id}>Name: {curElem.myName} & Age: {curElem.age}</h2>)
            }
            <button onClick={clearArray}>Clear</button>

        </>
    )
}

export default UseStateArray;