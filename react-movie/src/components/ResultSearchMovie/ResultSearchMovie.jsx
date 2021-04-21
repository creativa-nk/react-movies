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
const ResultSearchMovie = ({movie}) =>{
  
    return(
        <div className='resultMoviesConteiner'>
        <div className="resultMovie">
            <div className='movieTitleResult'>
                  <h4>{movie.title}</h4>
            </div>
            <div className='imgMovieResult'>  
                <img src={IMG_API + movie.poster_path}
                  onError={(e)=>{e.target.src = PeliculaSinPoster;}}  alt="imagen de la pelicula"
                 />
                <div className='averageResult'>
                    <p className={
                     `tag ${setVoteClass(movie.vote_average)}`
                     }>
                     {movie.vote_average}</p>
                </div> 
            </div>
            <div className='moreDetailsResult'>
                <h3 className='originalTitle'>{movie.original_title} <span>({movie.release_date})</span></h3>
                <h4> Sinopsis:</h4> <p>{movie.overview}</p>                 
            </div>

        </div> 
    </div>  
)};     
  
export default ResultSearchMovie;