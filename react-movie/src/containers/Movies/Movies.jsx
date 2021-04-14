import React, {useEffect, useState } from 'react';
import Movie from '../../components/Movie/Movie.jsx'
import axios from 'axios';
import '../Movies/Movies.scss'

const Movies = props =>{
    const movieType = props.match.params.movieType;
    const [movies,setMovies] = useState([]);
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieType}?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES`)
        .then(res => setMovies(res.data.results))
        .catch(console.error)
    }, [])

    return <div className='movies'>
        {movies?.map(movie=><Movie movie={movie}/>)}
    </div>
}
export default Movies;