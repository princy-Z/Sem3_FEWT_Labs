import React, { useState } from 'react'

function HandleLogin({handleLogin}) {

    const [user,setUser] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = ()=>{
        if(user == 'Princy' && password=='1234'){
            handleLogin(user);
        }
        else{
            alert("Please enter valid data...!");
        }
    }
  return (
    <>
        <h1>Admin Login</h1>
        <form onSubmit={handleSubmit}>
                <label>Username :</label>

                <input type="text" id="username" placeholder="Enter username"
                onChange={(e)=>setUser(e.target.value)}/>
                <br/>
                <br/>

                <label>Password :</label>

                <input type="password" id="pass" placeholder="Enter password"
                onChange={(e)=>setPassword(e.target.value)}/>
                <br/><br/>
                
                <button type='submit' id="Mybtn" >Login</button>
            </form>
    </>
  )
}

export default HandleLogin
