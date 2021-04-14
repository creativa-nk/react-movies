import React from 'react';
import '../Movie/Movie.scss'

const Movie = ({movie}) =>{
    return <div className="movie">
        <h4>{movie.title}</h4>
        <img src={"http://image.tmdb.org/t/p/w185"+movie.poster_path} alt=""/>
        <span>{movie.vote_average}</span>
    </div>
}
export default Movie;