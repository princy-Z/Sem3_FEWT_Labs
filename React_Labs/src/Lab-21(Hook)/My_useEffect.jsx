import React, { useEffect, useState } from 'react'

function My_useEffect() {

    const [count,setCount] = useState(0);
    const [flag,setFlag] = useState(true);

    // useEffect(() => {
    //     console.log("Count on render :" + count);
    // })

    // useEffect(() => {
    //     console.log("Count on render :" + count);
    // },[]);

    useEffect(()=>{
        console.log("Count on render :" + count);
    },[flag])
    
  return (
    <>
        <h1>Count : {count}</h1>
        <button onClick={() => {setCount(count + 1)}}>Count</button>
        <button onClick={()=>{setFlag(!flag)}}>Want to Render</button>
    </>
  )
}

export default My_useEffect
