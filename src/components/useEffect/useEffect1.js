import React, { useState, useEffect  } from "react";
import "../../App.css"
const UseEffect1 = () => {
    const [count, setCount] = useState(0);
    // const setCount = () => {

    // }
    useEffect(()=>{
        document.title = `Chat (${count})`;
    })
    console.log("hello outside")
    return (
        <>
            <h2>Use effect {count}</h2>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </>
    )
}

export default UseEffect1;