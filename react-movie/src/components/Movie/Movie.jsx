import React from 'react';
import '../Movie/Movie.scss'

const Movie = ({movie}) =>{
    return(
        <div className="movie" /* onclick='getMovieDetailed(${movie.id})' */>
           
                 <h2>{movie.title}</h2>
            
            <div className='imgMovie'>  
                <img src={"http://image.tmdb.org/t/p/w185"+ movie.poster_path} alt="imagen de la pelicula"/>    
                    <div className='average'>
                         <p>{movie.vote_average}</p>
                     </div>
            </div>
            
        </div>    
)};
    
  
export default Movie;