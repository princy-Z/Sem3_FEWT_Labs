import React, { useState } from 'react'
import Dashboard from './Dashboard';
import HandleLogin from './HandleLogin';

function Login() {

    const [data,setData] = useState(null);

  return (
    <>
        {data ? 
            <Dashboard data={data} handlelogout={()=>setData(null)} />
            :<HandleLogin handleLogin={(data)=>setData(data)}/>
        }
    </>
  )
}

export default Login
