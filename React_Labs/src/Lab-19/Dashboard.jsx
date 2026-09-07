import React from 'react'

function Dashboard({data,handlelogout}) {
  return (
    <>
    <h4>Hello from {data}</h4>
    
    <button onClick={handlelogout} id="Mybtn">Log-Out</button>
    </>
  )
}

export default Dashboard
