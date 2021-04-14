import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss'

const Header = props => {
    return(<header>
        <NavLink to='/popular'>
            <span className='populares' onclick="getPopularMovies();backgroundAzul()">Populares</span>
        </NavLink>

        <NavLink to='/upcoming'>
            <span className='upcoming'onclick="getComingMovies();backgroundAmarillo()">Proximos estrenos</span>
        </NavLink>
        
        <NavLink to='/top_rated'>
            <span className='top_rated'onclick="getComingMovies();backgroundAmarillo()">Más votadas</span>
        </NavLink>
        
    </header>
    )
}
export default Header;