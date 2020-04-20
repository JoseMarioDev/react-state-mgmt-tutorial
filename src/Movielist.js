import React,{useState, useContext} from 'react'
import Movie from './Movie';
import { MovieContext } from './MovieContext';


const Movielist = () => {
  const [movies,setMovies] = useContext(MovieContext)
  
  return (
    <div>
      {movies.map(movie => (
        <Movie price = {movie.price} name={movie.name}/>
        ) )}
      
    </div>
  )
}

export default Movielist;


