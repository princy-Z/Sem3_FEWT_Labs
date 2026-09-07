import { React, useState } from 'react'

function My_useState() {

    const [count,setCount] = useState(0);
    const [name,setName] = useState("")

  return (
    <>
    <br/>
    <br/>
        <button type="button" class="btn btn-primary position-relative">
          Inbox
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {count}
              <span class="visually-hidden">unread messages</span>
            </span>
        </button>
        <br/>
        <br/>
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
          <button type="button" onClick={() => {setCount(count + 1)}} class="btn btn-success">Increment</button>
          <button type="button" onClick={() => {setCount(count - 1)}} class="btn btn-danger">Decrement</button>
          <button type="button" onClick={() => {setCount(0)}} class="btn btn-warning">Reset</button>
        </div>

        <h1>Name : {name}</h1>
        <input type='text' onChange={(e) => {setName(e.target.value)}}/>
    </>
  )
}

export default My_useState
