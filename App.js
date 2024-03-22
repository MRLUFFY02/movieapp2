import './App.css'
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import Profile from './Profile'
// import AddColor from './AddColor'
// import AddMovie from './addmoviename'
// import { useState } from 'react'
// import Button from '@mui/material/Button';

import { useState } from "react"
import Movielist from "./movielist"
import AddMovie from './addmoviename'

// // function App()
// // {
// //   let cal=['red','blue','green','yellow']
  
// //   return(
// //     <div className='App'>
// //       <h1>Learn React</h1>
// //      {
// //       cal.map(c=><ColorBox key={c} color={c}/>)
// //      }

// //       </div>
// //   )
// // }

// // function ColorBox(props)
// // {
// //   return(
// //     <div style={{backgroundColor:props.color}}>React</div>
// //   )
// // }
// //---------------------------------------------------------------------------------
// // function App()
// // {
// //   const man=[{id:1,pName:"balaji",company:"mark-1",course:"python"},
// //   {id:2,pName:"bala",company:"mark-2",course:"css"},
// //   {id:3,pName:"sakthi",company:"mark-3",course:"html"},
// //   {id:4,pName:"mohan",company:"mark-4",course:"java"},
// //   {id:5,pName:"karthi",company:"mark-5",course:"js"}]

// //   const list= man.map(mans=><tr><th>{mans.id}</th><th>{mans.pName}</th><th>{mans.company}</th>
// //   <th>{mans.course}</th></tr>);
  
// //   return(
// //     <div>
// //        <h1>Array of object</h1>
// //        <table>{list}</table>
      
// //     </div>
// //   )
// // }
// //---------------------------------------------------------------------------------------------
// function  App()
// {
//   const users=[
//     {id:1,uname:"Aravind",pic:"https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg",ratting:9},
//     {id:2,uname:"Aravindhan",pic:"https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg",ratting:7},
//     {id:3,uname:"Balaji",pic:"https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg",ratting:5}
//   ]
// const [user,setUser]=useState({})
//   const [usersData,setUsers]=useState(users)
//   return(
//     <div>
//       <input placeholder='Name' onChange={e=>setUser({...user,uname:e.target.value})}/><input placeholder='Pic' onChange={e=>setUser({...user,pic:e.target.value})}/>
     
//       <Button onClick={()=>setUsers([...usersData,user])}>AddUsers</Button>
//       <Box>
//       <Grid container spacing={2}>
//       {
//         usersData.map(user=><Profile key={user.id} user={user}/>)
//       }
//       </Grid>
//       </Box>
//       {/* <AddColor/> */}
//       {/* <AddMovie/> */}
//     </div>
//   )
// }

//------------------------------------------------
//component defn
//to craete data in react into 2 ways
//state--current scnario --component inside data maintain
//props--to pass data as properties from one component to another component
//useState()--Hooks function ---it returns 2 values--1.current state 2.function to update state--setState()-inform react to update state
function App()
{
  const [movies,setMovies]=useState([
    {id:1,movie_name:"Joe",movie_rating:3,movie_summary:"Joe is a 2023 Indian Tamil-language romantic drama film written and directed by Hariharan Ram S. in his directorial debut and produced by Dr.D. Arulanandhu",movie_trailer:"https://www.youtube.com/embed/2lrbAHMACrM",movie_poster:"https://upload.wikimedia.org/wikipedia/en/9/96/Joe_%282023_film%29.jpg"
    },
    {id:2,movie_name:"ManjummalBoys",movie_rating:8,movie_summary:"Joe is a 2023 Indian Tamil-language romantic drama film written and directed by Hariharan Ram S. in his directorial debut and produced by Dr.D. Arulanandhu",movie_trailer:"https://www.youtube.com/embed/2lrbAHMACrM",movie_poster:"https://upload.wikimedia.org/wikipedia/en/9/96/Joe_%282023_film%29.jpg"
    },
    {id:3,movie_name:"Leo",movie_rating:5,movie_summary:"Joe is a 2023 Indian Tamil-language romantic drama film written and directed by Hariharan Ram S. in his directorial debut and produced by Dr.D. Arulanandhu",movie_trailer:"https://www.youtube.com/embed/2lrbAHMACrM",movie_poster:"https://upload.wikimedia.org/wikipedia/en/9/96/Joe_%282023_film%29.jpg"
    }
    ])
    function add({id,movie_name,movie_rating,movie_poster,movie_summary,movie_trailer})
    {
      setMovies([...movies,{id,movie_name,movie_rating,movie_poster,movie_summary,movie_trailer}])
    }
    
  // JSX starts
  return(<div>
    <AddMovie add={add}/>
    <div className='movie-list'>
      {
        movies.map(movie=><Movielist key={movie.id} movie={movie}/>)
      }
    </div>
    </div>
  )
  //JSX ends
}
export default App







