import React from "react";

export default function Events()
{
    function abc()
    {
        console.log("btn clicked!");
    }

    return(
        <>
            <button id="btn" onClick={abc}>Click</button>
            <p id="con"></p>
        </>
    )
}