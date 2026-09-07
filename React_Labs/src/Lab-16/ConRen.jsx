import React from "react";

export default function Render(obj)
{
    return(
        <>
            {obj.value && <h1>Hello World</h1>}
        </>
    )
}