import React, { createContext, useContext, useState } from 'react'

const themeContext=createContext()
function HomeContext() 
{
  let [btColor,setBtColor]=useState('white')
  const fColor={color:'white',background:'black'}
  const [mode,setMode]=useState('dark')
  const theme=[mode,setMode]
  const styles={background:mode=='light'?'white':'black'}
  return (
    <themeContext.Provider value={theme}>
    <div style={styles}>
      <List/>
      <button onClick={()=>(setBtColor==fColor?'white':'black')}>button</button>
    </div>
    </themeContext.Provider>
  )
}
function List()
{
  return <ul>
    {/* <li><ListItem value="Light☀️"/></li> */}
    <li><ListItem/></li>
    </ul>
}
function ListItem()
{
  return <li><Button/></li>
}
function Button()
{
  
const [mode,setMode]=useContext(themeContext)
let value='Light☀️'
  return<button onClick={()=>setMode(value=='Light☀️'?'light':'dark')}>{value=mode=='dark'?'Light☀️':'Dark🌙'}</button>
  
}
export default HomeContext