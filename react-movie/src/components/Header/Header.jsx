import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import Search from '../Search/Search.jsx'
import '../../img/multiAmarillo.jpg'

/* const BackgroundAmarillo = () => {
    document.body.style.backgroundImage = 'url(./img/multiAmarillo.jpg)';
  }  */


const Header = props => {
    return(
        <header>
            <div className='menu'>
                <NavLink to='/'>
                     <span className='inicio'>Inicio</span>
                </NavLink>
                <NavLink to='/popular'>
                     <span className='populares'>Populares</span>
                </NavLink>

                <NavLink to='/upcoming'>
                      <span className='upcoming'>Proximos estrenos</span>
                </NavLink>
        
                <NavLink to='/top_rated'>
                       <span className='top_rated'>Más votadas</span>
                </NavLink>

                <NavLink to='/search/movie'>
                       <span className='search'>Buscar pelicula</span>
                </NavLink>
            </div>
              
        </header>
    )
}
export default Header;