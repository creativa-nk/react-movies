import React, {useEffect, useState } from 'react';
import axios from 'axios';

const Movies = props =>{
    const movieType = props.match.params.movieType;
    const [movies,setMovies] = useState([]);
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieType}?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES`)
        .then(res => setMovies(res.data.results))
        .catch(console.error)
    }, [])

    return <div className='movies'>
        Tipo de peliculas: {movieType}
        {movies?.map(movie=>movie.title)}
    </div>
}
export default Movies;