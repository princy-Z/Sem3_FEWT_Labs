import React, { useState } from 'react'
import C from './C';

export default function B(props) {

    const[inputName,setInputName] = useState("");

  return (
    <>
    <h1>Component B</h1>

    <input type='text' placeholder='Enter Name' value={inputName}
    onChange={(e)=>{
        setInputName(e.target.value);
    }}/>
/
    <button onClick={()=>{
        props.setName(inputName);
    }}>Set Name</button>

    <C name = {props.name}/>
    </>
  )
}
