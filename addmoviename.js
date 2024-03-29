import React, { useState } from 'react'

function AddMovie({movieList,setMovieList}) 
{
const [movie_name,setName]=useState("")
const [movie_rating,setRating]=useState("")
const [movie_poster,setPoster]=useState("")
const [movie_summary,setSummary]=useState("")
const [movie_trailer,setTrailer]=useState("")
function add({id,movie_name,movie_rating,movie_poster,movie_summary,movie_trailer})
  {
    setMovieList([...movieList,{id,movie_name,movie_rating,movie_poster,movie_summary,movie_trailer}])
  }


  return (
    <div className='addBox'>
      Name:
      <input placeholder='Name' onChange={e=>setName(e.target.value)}/>
      Ratting:
      <input placeholder='rating' onChange={e=>setRating(e.target.value)}/>
      Poster:
      <input placeholder='poster' onChange={e=>setPoster(e.target.value)}/>
      summary:
      <input placeholder='summary' onChange={e=>setSummary(e.target.value)}/>
      Trailer:
      <input placeholder='trailer' onChange={e=>setTrailer(e.target.value)}/>
      {/* passing data from child to parent */}
      <button onClick={()=>add({movie_name,movie_rating,movie_poster,movie_summary,movie_trailer})}>AddMovie</button>
    </div>
  )
}

export default AddMovie