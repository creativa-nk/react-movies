import React, {useEffect, useState } from 'react';
import axios from 'axios';
import '../MovieDetail/MovieDetail.scss'

const MovieDetail = (props) => {
  /*   const { state, getMovieById } = useContext(MovieContext)*/
    const movieId = props.match.params.movieId
    const [movie,setMovie] = useState([]);
  
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES`)
        .then(res => setMovie(res.data.results))
        .catch(console.error)
    }, [movieId])
  
   /*  const { movieDataInfo } = state  */ 
  
  /*  if(movie) {
      let genres = []
      movie.genres.map(genre => genres.push(genre.name)) */

      return<div className='movieDetails'>
            {/* <div className="theMovie">
                <div className='tituloDetails'>
                  <h2>{movie.title}</h2>
                </div>
                <div className='details'>  
                    <img src={"http://image.tmdb.org/t/p/w185"+ movie.poster_path} alt="imagen de la pelicula"/>    
                        <div className='moreDetails'>
                            <h3 className='originalTitle'>{movie.original_title}<span>({movie.release_date})</span></h3>
                            <p className='genres'>{genres.join(', ')}</p>
                            <ul className='ulDetails'>                               
                                <li>{movie.original_language}</li>
                                <li>{movie.runtime} min</li>
                                <li className='averageDetails'>{movie.vote_average}</li>
                            </ul>    
                    
                            <p className='overview'>
                            <h4> Sinopsis:</h4>{movie.overview}</p>
                        </div>
                </div>    
            </div> */}
        </div>
      }

 export default MovieDetail;