import { useEffect, useState } from "react";
import { ApiAxios } from "../main";

export default function(){
    const [Movies, setMovies] = useState([])

    useEffect(() => {
        console.log(import.meta.env.VITE_APIURL)
        ApiAxios.get("/movies/")
        .then( res => setMovies(res.data))
        .catch(err => console.log(err))
    }, [])
    
    return(
        <div>
            <h1>Movies</h1>
            <ul>
                {Movies.map(movie => <li>{movie.title} by {movie.director}</li>)}
            </ul>
        </div>
    )
}