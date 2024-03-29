import React, { useState } from 'react'
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



 function MovieList({movieList})
{
  
    return(
      <div className='movie-list'>
      {
        movieList.map((movie,index)=><Movie key={index} movie={movie}/>)
      }
    </div>
    )

}

function Movie({movie}) 
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
          
          
          
        </CardActions>
    </Card>
  )
}


export default MovieList
