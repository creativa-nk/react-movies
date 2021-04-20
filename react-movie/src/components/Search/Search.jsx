import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './search.scss'

const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6db8b1cae4de7ed79b6af06f87c63d15&language=es-ES&page=1' 

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?&api_key=6db8b1cae4de7ed79b6af06f87c63d15&query='

const Search = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        getMovies(FEATURED_API);
    }, []);

    const getMovies = (API) =>{
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results)
            });
    };


       /*  const respose = async () => {
            await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=6db8b1cae4de7ed79b6af06f87c63d15&language=es-ES&query=${searchTerm}`)
            .then(res=> setMovies(res.data.results))
            .catch(error => console.error(error))
        };
        respose();
        }, [searchTerm]); */ 

        const HandleOnSubmit = (e) =>{
           e.preventDefault();

           if(searchTerm){
                    getMovies(SEARCH_API + searchTerm);
                    /*  fetch(SEARCH_API + searchTerm)
                         .then((res) => res.json())
                         .then((data) => {
                              setMovies(data.results)
                          }); */

                setSearchTerm('');
           }    
        };

        const HandleOnChange = (e) =>{
           setSearchTerm(e.target.value);
        }
        
    return (
        <div  className='searchConteiner'>
            <form  onSubmit = {HandleOnSubmit}>
                <input
                     className='search'
                     type='search'
                     placeholder='Buscar...' 
                     value={searchTerm}
                     onChange={HandleOnChange}
                 />
            </form>
        </div>
    )    
}

export default Search;