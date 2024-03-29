import React,{useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link, Route, Routes,useNavigate} from 'react-router-dom';
import Home from './home';
import MovieList from './movielist';
import AddMovie from './addmoviename';
import AddColor from './AddColor';

function App2() {
    const [movieList,setMovieList]=useState([{id:1,movie_name:"Joe",movie_rating:3,movie_summary:"Joe is a 2023 Indian Tamil-language romantic drama film written and directed by Hariharan Ram S. in his directorial debut and produced by Dr.D. Arulanandhu",movie_trailer:"https://www.youtube.com/embed/2lrbAHMACrM",movie_poster:"https://upload.wikimedia.org/wikipedia/en/9/96/Joe_%282023_film%29.jpg"
  },
  {id:2,movie_name:"ManjummalBoys",movie_rating:8,movie_summary:"Joe is a 2023 Indian Tamil-language romantic drama film written and directed by Hariharan Ram S. in his directorial debut and produced by Dr.D. Arulanandhu",movie_trailer:"https://www.youtube.com/embed/2lrbAHMACrM",movie_poster:"https://upload.wikimedia.org/wikipedia/en/9/96/Joe_%282023_film%29.jpg"
  },
  {d:3,movie_name:"Leo",movie_rating:5,movie_summary:"Joe is a 2023 Indian Tamil-language romantic drama film written and directed by Hariharan Ram S. in his directorial debut and produced by Dr.D. Arulanandhu",movie_trailer:"https://www.youtube.com/embed/2lrbAHMACrM",movie_poster:"https://upload.wikimedia.org/wikipedia/en/9/96/Joe_%282023_film%29.jpg"
  }
  ])


    const navigate=useNavigate()
  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
                <Button color='inherit' onClick={()=>navigate('/')}>Home</Button>
                <Button color='inherit' onClick={()=>navigate('/movies')}>Movies</Button>
                <Button color='inherit' onClick={()=>navigate('/addmovie')}>AddMovie</Button>
                <Button color='inherit' onClick={()=>navigate('/colorgame')}>ColorGame</Button>

            </Toolbar>
        </AppBar>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/movies" element={<MovieList movieList={movieList}/>}/> 
        <Route path="/addmovie" element={<AddMovie movieList={movieList} setMovieList={setMovieList}/>}/>  
        <Route path="/colorgame" element={<AddColor/>}/>  

        </Routes>
    </div>
  )
}

export default App2