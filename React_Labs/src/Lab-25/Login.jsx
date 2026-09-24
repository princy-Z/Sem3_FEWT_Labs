import React, { useContext, useState } from "react";
import { UserContext } from "./ContentRender";

export default function Login() {
  const { user, setUser } = useContext(UserContext);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = ()=>{
    if(userName === 'admin' && password === '1234')
    {
        setUser(userName);
    }else{
        alert("Please enter valid username and password...");
    }
  }

  return (
    <>
      <div
        style={{
          height: "100%",
          padding: "2%",
          boxShadow: "0.5 0.5 0.5 0.5 black",
          width: "60%",
          color: "white",
          borderRadius: "20px",
          margin: "auto",
          background: "black",
        }}
      >
        <h1>Login Page</h1>
        <br />
        <label>User-Name :</label>&nbsp;
        <input
          placeholder="Enter your username"
          value={userName}
          type="text"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <br />
        <label>Password :</label>&nbsp;
        <input
          placeholder="Enter your password"
          value={password}
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <button onClick={handleClick}>Login</button>
      </div>
    </>
  );
}
