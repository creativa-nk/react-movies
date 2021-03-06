import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from '../Movie/Movie';
import'../Movie/Movie.scss'
import './search.scss';

const Search = () => {
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')
   
    const handleSubmit = e => {
        if (query !== '') {
            setSearch(query)
            setQuery('')
        }
        e.preventDefault();
    }


    useEffect( () => {
        const respose = async () => {
            await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=6db8b1cae4de7ed79b6af06f87c63d15&language=es-ES&query=${search}`)
            .then(res=> setMovies(res.data.results))
            .catch(error => console.error(error))
        };
        respose();
        }, [search]);

    return (
        <div className='searchConteiner'>
            <header>
                 <form onSubmit={handleSubmit} >
                      <input className='input' 
                        type='search'
                          autoFocus
                         placeholder='Buscar pelicula'
                         onChange={e => setQuery(e.target.value)}
                         value={query}
                         />
                 </form>
           </header>
           <div>
                {search
                ? <p className="searchResults">Resultados para: {search}</p>
                : null}
            </div>
           <div className="result">
               {movies?.map((movie,index)=>
               index < 10 &&
               <Movie movie={movie} key={movie.id}/>)}   
           </div>   
        </div>
    )
}

export default Search