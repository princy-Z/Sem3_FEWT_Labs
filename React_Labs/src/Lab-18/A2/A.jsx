import React, { useState } from 'react'
import B from './B';

export default function A(props) {

  const[inputName,setInputName] = useState("");

  return (
    <>
    <h1>Component A</h1>

    <textarea placeholder='Enter something' value={inputName}
    onChange={(e)=>{
        setInputName(e.target.value);
    }} />

    <B text = {props.text} setText = {props.setText} inputName={inputName} />
    </>
  )
}
