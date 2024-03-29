import { Button } from "@mui/material"
import {useNavigate,useParams} from 'react-router-dom'
function MovieDetails({movieList})
{
    const navigate=useNavigate()
    const {id}=useParams()
    const movie=movieList.find(mv=>mv.id===Number(id))
    console.log(movie)
  return(
    <div>
        <iframe width="914" height="514" src={movie.movie_trailer} title="Dada - Official Trailer | Kavin | Aparna Das | Ganesh K Babu | S.Ambeth Kumar | Olympia Movies" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    <div className='Movie-detail-container'>
        {id}
        <Button onClick={()=>navigate(-1)}>Back</Button>
    </div>
    </div>
  )
}
export default MovieDetails