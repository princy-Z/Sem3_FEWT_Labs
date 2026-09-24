import React, { useState } from 'react'
import { createContext } from 'react';
import Dashboard from './Dashboard';
import Login from './Login';

export const UserContext = createContext();
    
export default function ContentRender() {

  const [user,setUser] = useState();

  return (
    <UserContext value={{user,setUser}}>
      {user ? <Dashboard/> : <Login/>} 
    </UserContext>
  );
}
