import React from 'react'
import C from './C';

export default function B(props) {
  return (
    <>
    <h1>Component B</h1>

    <button onClick={()=>{
        props.setText(props.inputName);
    }}>Set text</button>

    <C text={props.text} />
    </>
  )
}
