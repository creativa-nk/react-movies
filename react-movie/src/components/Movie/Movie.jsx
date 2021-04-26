import React from 'react';
import '../Movie/Movie.scss';
import PeliculaSinPoster from '../../img/PeliculaSinPoster.jpg'

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
                <img src={IMG_API + movie.poster_path}
                  onError={(e)=>{e.target.src = PeliculaSinPoster;}}  alt="imagen de la pelicula"
                 />
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
                           <h4> Sinopsis:</h4> <p>{movie.overview}</p>
                            
            </div>

        </div> 
       
)};
console.log(Movie)     
  
export default Movie;