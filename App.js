import './App.css'
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import Profile from './Profile'
// import AddColor from './AddColor'
// import AddMovie from './addmoviename'
// import { useState } from 'react'
// import Button from '@mui/material/Button';

import React,{ useRef, useState } from "react"
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
import TestMemo from './memo';
import One from './context/one';
import HomeContext from './context/homecontext';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';

//component defn
//to craete data in react into 2 ways
//state--current scnario --component inside data maintain
//props--to pass data as properties from one component to another component
//useState()--Hooks function ---it returns 2 values--1.current state 2.function to update state--setState()-inform react to update state
function App()
{
// const [isShow,setIsShow]=useState(true)
const [mode,setMode]=useState('dark')
const navigate=useNavigate()
const inp=useRef()

  
const theme = createTheme({
  palette: {
    mode: mode,
  },
});

  // JSX starts
  return(
    <ThemeProvider theme={theme}>
      <Paper elevation={4} style={{minHeight:'100vh'}}>

  <div>
       <AppBar position="static">
       <Container maxWidth="xl">
        <Toolbar>
       <Button color='inherit' onClick={()=>navigate("/")}>Home</Button>
       <Button color='inherit' onClick={()=>navigate("/movies")}>Movies</Button>
       <Button color='inherit' onClick={()=>navigate("/addmovie")}>AddMovie</Button>
       <Button color='inherit' onClick={()=>navigate("/colorgame")}>ColorGame</Button>
      <Button startIcon={mode=='dark'?<Brightness7Icon/>:<Brightness4Icon/>} color='inherit' onClick={()=>setMode(mode=='dark'?'light':'dark')}>{mode=='dark'?'Light ':'Dark '}Mode</Button>
      </Toolbar>
      </Container>
      </AppBar>
      {/* <Header/> */}
      {/* <button onClick={()=>setIsShow(!isShow)}>
        {isShow?'remove':'show'} 
        </button>
      {isShow?<Lcm/>:""} */}
        {/* <input ref={inp}/>
        <button onClick={()=>inp.current.style.backgroundColor='red'}>cgstyle</button> */}
        {/* <TestMemo/> */}
        {/* <One/> */}
        {/* <HomeContext/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/movies" element={<MovieList/>}/>
        <Route path="/addmovie" element={<AddMovie/>}/>
        <Route path="/colorgame" element={<AddColor/>}/>
        {/* dynamically matches Route */}
        <Route path='/movies/:id' element={<MovieDetails/>}/>
        <Route path='/editmovie/:id' element={<Editmovie/>}/>
        <Route path='/404' element={<NotFound/>}/>
        <Route path='*' element={<Navigate replace to='/404'/>}/>
      </Routes>
    </div>
    </Paper>
    </ThemeProvider>
  )
  //JSX ends
}
export default App







