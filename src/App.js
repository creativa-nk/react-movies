import React from 'react';
import Header from './components/Header/Header.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Movies from './containers/Movies/Movies.jsx';
import Footer from '../src/components/Footer/Footer';
import Search from './components/Search/Search';
import TituloInicio from '../src/components/TituloInicio/TituloInicio.jsx'
import '../src/App.css'


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <Switch>
              <Route path='/react-movies/' component={TituloInicio} exact/>
              <Route path='/' component={TituloInicio} exact/>
              <Route path='/:movieType' component={Movies} exact/>
              <Route path='/search/movie' component={Search} />
            </Switch>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
