import React, { useEffect, useState } from 'react'

function Lcm() {
    const [msg,setMsg]=useState('hello')
    // ComponentDidMount
    useEffect(()=>{
        console.log('did mount')
    },[])
    //ComponentDidUpdate
    useEffect(()=>{
        console.log('did update')
    },[msg])
    //ComponentWillUnMount
    useEffect(()=>{
        return(()=>console.log('unmount'))
    },[])

  return (
    <div>
        <h1>Lifecycle Methods</h1>
        <ul>
            <li>Mounting</li>
            <li>Updating<button onClick={()=>setMsg('welcome')}>update msg</button></li>
            <li>UnMounting</li>
        </ul>
    </div>
  )
}

export default Lcm