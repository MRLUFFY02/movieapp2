import React, { useReducer } from 'react'
import Four from './four'

import { initialCount,counterReducer } from './one'
function Three() {
    const [state,dispatch]=useReducer(counterReducer,initialCount)
  return (
    <div>
        <h1>Three</h1>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>{state.count}<button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
        <hr/>
        <Four/>
    </div>
  )
}

export default Three