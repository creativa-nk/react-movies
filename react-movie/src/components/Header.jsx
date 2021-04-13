import React from 'react'

const Header = props => {
    return(<header>
        <span onclick="getPopularMovies();backgroundAzul()">Populares</span>
        <span onclick="getComingMovies();backgroundAmarillo()">Proximos estrenos</span>
        <span onclick="getComingMovies();backgroundAmarillo()">Más votadas</span>
    </header>
    )
}
export default Header;