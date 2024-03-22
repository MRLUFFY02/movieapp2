import React, { useState } from 'react'

function Movielist({movie}) 
{
    const [show,setShow]=useState(false)
    const styles={
        display:show?'block':'none'
    }
  return (
    <div className='movie-container'>
        <img className='movie-poster' src={movie.movie_poster}/>
        <div className='movie-specs'>
            <h2 className='movie-name'>{movie.movie_name}</h2>
            {/* conditional styling */}
            <p style={{color:movie.movie_rating>=7?'green':'red'}}>⭐ {movie.movie_rating}</p>
        </div>
        <button onClick={()=>setShow(!show)}>toggle Description</button>
        {/* conditional rendering */}
        {show?<p>{movie.movie_summary}</p>:""}

    </div>
  )
}

export default Movielist