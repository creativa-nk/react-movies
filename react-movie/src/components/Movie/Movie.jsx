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
            <div className='moreDetails'>
                            <h3 className='originalTitle'>{movie.original_title}</h3>
                            <span>({movie.release_date})</span>
                          {/*   <p className='genres'>{movie.genres.map(genre => genres.push(genre.name)).join(', ')}</p> */}                            
                            <span>{movie.runtime} min</span>
                           <h4> Sinopsis:</h4>{movie.overview}
                            
            </div>

        </div>    
)};
    
  
export default Movie;