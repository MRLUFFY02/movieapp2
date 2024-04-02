import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddMovie({movieList,setMovieList}) 
{
const [movie_name,setName]=useState("")
const [movie_rating,setRating]=useState("")
const [movie_poster,setPoster]=useState("")
const [movie_summary,setSummary]=useState("")
const [movie_trailer,setTrailer]=useState("")

const navigate=useNavigate()
function add()
  {
    const newMovie={movie_name,movie_rating,movie_poster,movie_summary,movie_trailer}

    console.log(newMovie);
    fetch(`https://65d6ed7d27d9a3bc1d79a9b2.mockapi.io/movies`,{
      method:'POST',
      body:JSON.stringify(newMovie),
      headers:{
        "Content-Type":"application/json"
      }
    }).then(data=>data.json()).then((movie)=>{console.log(movie)
      navigate("/movies")})
  }


  return (
    <div className='addBox'>
      Name:
      <input placeholder='Name' autoComplete='true' onChange={e=>setName(e.target.value)}/>
      Ratting:
      <input placeholder='rating' autoComplete='true' onChange={e=>setRating(e.target.value)}/>
      Poster:
      <input placeholder='poster' autoComplete onChange={e=>setPoster(e.target.value)}/>
      summary:
      <input placeholder='summary' autoComplete onChange={e=>setSummary(e.target.value)}/>
      Trailer:
      <input placeholder='trailer' autoComplete onChange={e=>setTrailer(e.target.value)}/>
      {/* passing data from child to parent */}
      <button onClick={add}>AddMovie</button>
    </div>
  )
}

export default AddMovie