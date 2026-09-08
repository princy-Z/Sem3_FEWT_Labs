import React, { useState } from 'react'

export default function Calc() {

  const btncss = {
    height:"90%",
    width:"90px",
    backgroundColor : "black",
    color : "white",
    borderRadius:"10px",
    fontWeight: "bold",
    fontSize : "22px",
    margin:"3px",
    boxShadow : "2px 2px 2px 2px #3e3d3c"
  }

  const Inputcss = {
    ...btncss,
    width:"100%"
  }
  const Mbtncss = {
    ...btncss,
    backgroundColor :"#bb3f06"
  }
  const [exp,setExp] = useState("");

  const handleClick = (value) =>
  {
      if(value === "=")
      {
        try{
          setExp(eval(exp).toString());
        }catch{
          setExp("Error!");
        }
      }else if(value === "AC")
      {
        setExp("");
      }else if(value === "<-")
      {
        setExp(exp.slice(0,-1));
      }else
      {
        setExp(exp + value);
      }
  }

  return (
    <>
    <div style={{padding:"15px",backgroundColor:"#85817f",height:"650px",width:"30%",margin:"auto",borderRadius:"20px"}}>
    <table style={{height:"100%",width:"100%"}}>
        <tr>
          <td colSpan={4}><input type='text' style={Inputcss} value={exp} readOnly/></td>
        </tr>

        <tr>
          <td><button onClick={()=>handleClick("AC")} style={Mbtncss}>AC</button></td>
          <td><button onClick={()=>handleClick("<-")} style={Mbtncss}>←</button></td>
          <td><button onClick={()=>handleClick("+")} style={btncss}>+</button></td>
          <td><button onClick={()=>handleClick("-")} style={btncss}>−</button></td>
        </tr>

        <tr>
          <td><button onClick={()=>handleClick("7")} style={btncss}>7</button></td>
          <td><button onClick={()=>handleClick("8")} style={btncss}>8</button></td>
          <td><button onClick={()=>handleClick("9")} style={btncss}>9</button></td>
          <td><button onClick={()=>handleClick("*")} style={btncss}>×</button></td>
        </tr>

        <tr>
          <td><button onClick={()=>handleClick("6")} style={btncss}>6</button></td>
          <td><button onClick={()=>handleClick("5")} style={btncss}>5</button></td>
          <td><button onClick={()=>handleClick("4")} style={btncss}>4</button></td>
          <td><button onClick={()=>handleClick("/")} style={btncss}>÷</button></td>
        </tr>

        <tr>
          <td><button onClick={()=>handleClick("3")} style={btncss}>3</button></td>
          <td><button onClick={()=>handleClick("2")} style={btncss}>2</button></td>
          <td><button onClick={()=>handleClick("1")} style={btncss}>1</button></td>
          <td><button onClick={()=>handleClick("%")} style={btncss}>%</button></td>
        </tr>

        <tr>
          <td><button onClick={()=>handleClick("0")} style={btncss}>0</button></td>
          <td><button onClick={()=>handleClick("00")} style={btncss}>00</button></td>
          <td><button onClick={()=>handleClick(".")} style={btncss}>.</button></td>
          <td><button onClick={()=>handleClick("=")} style={Mbtncss}>=</button></td>
        </tr>
    </table>
    </div>
    </>
  )
}


