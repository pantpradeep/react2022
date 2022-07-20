import React, { useState, useEffect  } from "react";

const UseStateObject = () => {
    const [myObj, setMyObj] = useState({
        myName:'Binod', myAge:27, degree:"MCS"
    })
    const changeObject = () => {
        setMyObj({...myObj, myName:'raju'})
    }
    return (
        <>
            <h2>Name: {myObj.myName} & age: 27 & degree</h2>
            <button className="btn" onClick={changeObject}>Update</button>
        </>
    )
}

export default UseStateObject;