import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import InfoIcon from '@mui/icons-material/Info';
import { CardActions } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import Badge from '@mui/material/Badge';
import { red } from '@mui/material/colors';



 function MovieList()
{
  const [movieList,setMovieList]=useState([])
  const getMovies=()=>{
    fetch('https://65d6ed7d27d9a3bc1d79a9b2.mockapi.io/movies').then(movies=>movies.json()).then(movies=>setMovieList(movies))
  }
  
    useEffect(()=>{
      getMovies()
    },[])

    const deleteMovie=(id)=>{
      console.log('Deleting Movies ',id);
      fetch(`https://65d6ed7d27d9a3bc1d79a9b2.mockapi.io/movies/${id}`,{method:'DELETE'}).then(()=>getMovies())
    }
    const editMovie=(id)=>{
      fetch(`https://65d6ed7d27d9a3bc1d79a9b2.mockapi.io/movies/${id}`).then(data=>data.json()).then(movie=>console.log(movie))
    }
    
    return(
      <div className='movie-list'>
      {
        movieList.map(movie=><Movie key={movie.id} movie={movie} deleteButton={<button onClick={()=>deleteMovie(movie.id)}>Delete</button>} editButton={<Button onClick={()=>editMovie(movie.id)}>Edit</Button>}/>)
      }
    </div>
    )

}

function Movie({movie,deleteButton,editButton}) 
{
    const [show,setShow]=useState(false)
    const [like,setLike]=useState(0)
    const [disLike,setDisLike]=useState(0)

    const navigate=useNavigate()

    const styles={
        display:show?'block':'none'
    }
    const incrementLike=()=>setLike(like+1)
    const incrementDisLike=()=>setDisLike(disLike+1)


  return (
    <Card className='movie-container'>
        <img className='movie-poster' src={movie.movie_poster}/>
        <CardContent>
      
        <div className='movie-specs'> 
            <h2 className='movie-name'>{movie.movie_name}
           <IconButton onClick={()=>{navigate(`/movies/${movie.id}`)}}>
            <InfoIcon/>
           </IconButton>
           <IconButton onClick={()=>setShow(!show)}>
          {show?<ExpandLessIcon/>:<ExpandMoreIcon/>}
        </IconButton>
       
        </h2>

            {/* conditional styling */}
             <p className='movie-rating' style={{color:movie.movie_rating>=7?'green':'red'}}>⭐ {movie.movie_rating}</p>
        </div>
       
        
        {/* conditional styling */}
        {/* <p style={styles}>{movie.movie_summary}</p> */}
        {/* conditional rendering */}
        {show?<p>{movie.movie_summary}</p>:""}
        </CardContent>
        <CardActions>
        <IconButton onClick={incrementLike}><Badge badgeContent={like} color="success">
        <ThumbUpIcon/>
         </Badge>
        </IconButton>
        <IconButton onClick={incrementDisLike}><Badge badgeContent={disLike} color="secondary">
        <ThumbUpIcon/>
         </Badge>
        </IconButton>
          {deleteButton}
          {editButton}
          
        </CardActions>
    </Card>
  )
}


export default MovieList
