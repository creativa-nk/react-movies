import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import '../../img/multiAmarillo.jpg'

/* const BackgroundAmarillo = () => {
    document.body.style.backgroundImage = 'url(./img/multiAmarillo.jpg)';
  }  */


const Header = props => {
    return(<header>
        <NavLink to='/popular'>
            <span className='populares' onclick="getPopularMovies();backgroundAzul()">Populares</span>
        </NavLink>

        <NavLink to='/upcoming'>
            <span className='upcoming'onClick="getPopularMovies();backgroundAmarillo()">Proximos estrenos</span>
        </NavLink>
        
        <NavLink to='/top_rated'>
            <span className='top_rated'onclick="getComingMovies();backgroundAmarillo()">Más votadas</span>
        </NavLink>
        <input className="search" type='text' placeholder='Buscar...'/>
            
        
    </header>
    )
}
export default Header;