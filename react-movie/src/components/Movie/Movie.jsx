import React from 'react';
import '../Movie/Movie.scss'

const setVoteClass = (vote) =>{
    if(vote >= 8){
        return 'green'
    }else if(vote >=6 ){
        return 'orange'
    }else{
        return 'red';
    }
}

const IMG_API = "http://image.tmdb.org/t/p/w185";
const Movie = ({movie}) =>{
  
    return(
        <div className="movie">
           
            <div className='movieTitle'>
                  <div >{movie.title}</div>
            </div>
            
            <div className='imgMovie'>  
                <img src={IMG_API + movie.poster_path} alt="imagen de la pelicula"/>    
                    <div className='average'>
                         <p className={
                             `tag ${setVoteClass(movie.vote_average)}`
                             }>
                                 {movie.vote_average}</p>
                     </div>
            </div>
            <div className='moreDetails'>
                            <h3 className='originalTitle'>{movie.original_title}</h3>
                            <span>({movie.release_date})</span>                          
                            <span>{movie.runtime} min</span>
                           <h4> Sinopsis:</h4>{movie.overview}
                            
            </div>

        </div> 
       
)};
console.log(Movie)       
  
export default Movie;