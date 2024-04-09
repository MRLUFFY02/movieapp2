import React, { useContext, useReducer, useState } from 'react'
import { msgContext } from './one'
import { initialCount,counterReducer } from './one'
function Four() {
    const m=useContext(msgContext)
    const [c,setC]=useState(0)
    const [counter,dispatch]=useReducer(counterReducer,initialCount)
  return (
    <div>
        <h1>Four</h1>
        <h2>{m}</h2>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>{counter.count}</button>
    </div>
  )
}

export default Four