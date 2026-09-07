import React from "react";

export default function A1()
{
    const names = ['Ayushi','Tulsi','Riya','Princy'];

    return(
        <>
            <h1>Friends</h1>
            <ul style={{listStyleType : "disc",border:"2px dashed black", width:"150px"}}>

            {names.map(
                (name,index)=>{
                    return(
                        <li key={index}>{name}</li>
                    )
                } 
            )}
            </ul>
        </>
    )
}