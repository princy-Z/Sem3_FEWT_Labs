import React, { useContext } from 'react'
import { UserContext } from './ContentRender'

export default function Dashboard() {

    const{user,setUser} = useContext(UserContext);

  return (
    <>
    <div style={{height:"100%",padding:"2%",boxShadow:"0.5 0.5 0.5 0.5 black",width:"60%",color:"white",borderRadius:"20px",margin:"auto",background:"black",}}>
        <h1>Welcome To Dashboard</h1>
        <p>Hello, {user} !</p>
        <button onClick={()=>setUser(null)}>Logout</button>
    </div>
    </>
  )
}
