import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'

function Editmovie() {
    const [movie,setMovie]=useState(null)
    const {id}=useParams()
    useEffect(()=>{
        fetch(`https://65d6ed7d27d9a3bc1d79a9b2.mockapi.io/movies/${id}`).then(data=>data.json()).then(mv=>setMovie(mv))
      },[id])
  return (
    <div>
        {/* <pre>{JSON.stringify(movie,null,2)}</pre> */}
        {movie?<EditMovieForm movie={movie}/>:'loading....'}
    </div>
  )
}
function EditMovieForm({movie})
{
    const [movie_name,setName]=useState(movie.movie_name)
    const [movie_rating,setRating]=useState(movie.movie_rating)
    const [movie_poster,setPoster]=useState(movie.movie_poster)
    const [movie_summary,setSummary]=useState(movie.movie_summary)
    const [movie_trailer,setTrailer]=useState(movie.movie_trailer)

const navigate=useNavigate()
function update()
  {
    const editMovie={movie_name,movie_rating,movie_poster,movie_summary,movie_trailer}

    console.log(editMovie);
    fetch(`https://65d6ed7d27d9a3bc1d79a9b2.mockapi.io/movies/${movie.id}`,{
      method:'PUT',
      body:JSON.stringify(editMovie),
      headers:{
        "Content-Type":"application/json"
      }
    }).then(data=>data.json()).then((movie)=>{console.log(movie)
      navigate("/movies")})
  }


   return( <div className='addBox'>
      Name:
      <input placeholder='Name'  onChange={e=>setName(e.target.value)} value={movie_name}/>
      Ratting:
      <input placeholder='rating' onChange={e=>setRating(e.target.value)} value={movie_rating}/>
      Poster:
      <input placeholder='poster' onChange={e=>setPoster(e.target.value)} value={movie_poster}/>
      summary:
      <input placeholder='summary' onChange={e=>setSummary(e.target.value)} value={movie_summary}/>
      Trailer:
      <input placeholder='trailer' onChange={e=>setTrailer(e.target.value)} value={movie_trailer}/>
      {/* passing data from child to parent */}
      <button onClick={update}>UpdateMovie</button>
    </div>)
}

export default Editmovie