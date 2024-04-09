import React, { useState,createContext } from 'react'
import Two from './two'
export const msgContext=createContext()
    export const initialCount={count:0}

    export const counterReducer=(state,action)=>
    {
        switch(action.type)
        {
            case "INCREMENT":
                return {count:state.count+1}
            case "DECREMENT":
                return {count:state.count-1}
            default:
                return state

        }
    }
    function One() {
        const [msg,setMsg]=useState("hi")
    
    
  return (
    <div>
        <h1>One</h1>
        <p>{msg}</p>
        <hr/>
        <msgContext.Provider value={msg}>
        <Two/>
        </msgContext.Provider>
    </div>
  )
}

export default One