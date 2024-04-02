import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import {useNavigate,useParams} from 'react-router-dom'
function MovieDetails()
{
  const [movie,setMovie]=useState({})
    const navigate=useNavigate()
    const {id}=useParams()
    // const movie=movieList.find(mv=>mv.id===Number(id))
    // console.log(movie)
console.log(id);
    useEffect(()=>{
      fetch(`https://65d6ed7d27d9a3bc1d79a9b2.mockapi.io/movies/${id}`).then(movie=>movie.json()).then(mv=>setMovie(mv)).then(()=>console.log(movie.id))
    },[id])
  return(
    <div>
        <iframe width="914" height="514" src={movie.movie_trailer} title="Dada - Official Trailer | Kavin | Aparna Das | Ganesh K Babu | S.Ambeth Kumar | Olympia Movies" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        
    <div className='Movie-detail-container'>
        
        <pre>{JSON.stringify(id,null,2)}</pre>
        <Button onClick={()=>navigate(-1)}>Back</Button>
    </div>
    </div>
  )
}
export default MovieDetails