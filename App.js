import './App.css'
import {Box,Button,Grid} from '@mui/material'
import Profile from './Profile'
import AddColor from './AddColor'
import AddMovie from './addmoviename'
import { useState } from 'react'
// function App()
// {
//   let cal=['red','blue','green','yellow']
  
//   return(
//     <div className='App'>
//       <h1>Learn React</h1>
//      {
//       cal.map(c=><ColorBox key={c} color={c}/>)
//      }

//       </div>
//   )
// }

// function ColorBox(props)
// {
//   return(
//     <div style={{backgroundColor:props.color}}>React</div>
//   )
// }
//---------------------------------------------------------------------------------
// function App()
// {
//   const man=[{id:1,pName:"balaji",company:"mark-1",course:"python"},
//   {id:2,pName:"bala",company:"mark-2",course:"css"},
//   {id:3,pName:"sakthi",company:"mark-3",course:"html"},
//   {id:4,pName:"mohan",company:"mark-4",course:"java"},
//   {id:5,pName:"karthi",company:"mark-5",course:"js"}]

//   const list= man.map(mans=><tr><th>{mans.id}</th><th>{mans.pName}</th><th>{mans.company}</th>
//   <th>{mans.course}</th></tr>);
  
//   return(
//     <div>
//        <h1>Array of object</h1>
//        <table>{list}</table>
      
//     </div>
//   )
// }
//---------------------------------------------------------------------------------------------
function  App()
{
  const users=[
    {id:1,uname:"Aravind",pic:"https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg"},
    {id:2,uname:"Aravindhan",pic:"https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg"},
    {id:3,uname:"Balaji",pic:"https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg"}
  ]
const [user,setUser]=useState({})
  const [usersData,setUsers]=useState(users)
  return(
    <div>
      <input placeholder='Name' onChange={e=>setUser({...user,uname:e.target.value})}/><input placeholder='Pic' onChange={e=>setUser({...user,pic:e.target.value})}/>
     
      <Button onClick={()=>setUsers([...usersData,user])}>AddUsers</Button>
      <Box>
      <Grid container spacing={2}>
      {
        usersData.map(user=><Profile key={user.id} user={user}/>)
      }
      </Grid>
      </Box>
      {/* <AddColor/> */}
      {/* <AddMovie/> */}
    </div>
  )
}

export default App







