import './App.css'
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import Profile from './Profile'
// import AddColor from './AddColor'
// import AddMovie from './addmoviename'
// import { useState } from 'react'
// import Button from '@mui/material/Button';

import React,{ useState } from "react"
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
// import MenuItem from '@mui/material/MenuItem';


import Home from './home'
import { Navigate, Route, Routes,useNavigate} from 'react-router-dom';
import MovieList from './movielist';
import AddMovie from './addmoviename';
import AddColor from './AddColor';
import MovieDetails from './moviedetails';
import NotFound from './notFound';
import Header from './header';
import Counter from './counter';
import Lcm from './lcm';
import Editmovie from './editmovie';


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
// const [isShow,setIsShow]=useState(true)
const navigate=useNavigate()
const [movieList,setMovieList]=useState([{id:1,movie_name:"Joe",movie_rating:3,movie_summary:"Joe is a 2023 Indian Tamil-language romantic drama film written and directed by Hariharan Ram S. in his directorial debut and produced by Dr.D. Arulanandhu",movie_trailer:"https://www.youtube.com/embed/23mMdgo0prk",movie_poster:"https://upload.wikimedia.org/wikipedia/en/9/96/Joe_%282023_film%29.jpg"
  },
  {id:2,movie_name:"ManjummalBoys",movie_rating:8,movie_summary:"Joe is a 2023 Indian Tamil-language romantic drama film written and directed by Hariharan Ram S. in his directorial debut and produced by Dr.D. Arulanandhu",movie_trailer:"https://youtu.be/id848Ww1YLo?si=h3MoDB3ccCbwWHML",movie_poster:"https://img.etimg.com/thumb/width-1200,height-1200,imgsize-1216451,resizemode-75,msid-107930187/magazines/panache/manjummel-boys-twitter-review-chidambarams-film-delivers-a-rollercoaster-of-emotions.jpg"
  },
  {id:3,movie_name:"Leo",movie_rating:5,movie_summary:"Joe is a 2023 Indian Tamil-language romantic drama film written and directed by Hariharan Ram S. in his directorial debut and produced by Dr.D. Arulanandhu",movie_trailer:"https://www.youtube.com/embed/Po3jStA673E",movie_poster:"https://images.news18.com/ibnlive/uploads/2023/10/leo-poster-2023-10-b35730a42138a250e8a820b8a4f637a5.jpg"
  }
  ])

  
  // JSX starts
  return(<div>
       <AppBar position="static">
       <Container maxWidth="xl">
        <Toolbar>
       <Button color='inherit' onClick={()=>navigate("/")}>Home</Button>
       <Button color='inherit' onClick={()=>navigate("/movies")}>Movies</Button>
       <Button color='inherit' onClick={()=>navigate("/addmovie")}>AddMovie</Button>
       <Button color='inherit' onClick={()=>navigate("/colorgame")}>ColorGame</Button>

      </Toolbar>
      </Container>
      </AppBar>
      {/* <Header/> */}
      {/* <button onClick={()=>setIsShow(!isShow)}>
        {isShow?'remove':'show'} 
        </button>
      {isShow?<Lcm/>:""} */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/movies" element={<MovieList/>}/>
        <Route path="/addmovie" element={<AddMovie movieList={movieList} setMovieList={setMovieList}/>}/>
        <Route path="/colorgame" element={<AddColor/>}/>
        {/* dynamically matches Route */}
        <Route path='/movies/:id' element={<MovieDetails/>}/>
        <Route path='/editmovie/:id' element={<Editmovie/>}/>
        <Route path='/404' element={<NotFound/>}/>
        <Route path='*' element={<Navigate replace to='/404'/>}/>
      </Routes>
    </div>
  )
  //JSX ends
}
export default App







