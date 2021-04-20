import React from 'react';
import Header from './components/Header/Header.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Movies from './containers/Movies/Movies.jsx';
import Footer from '../src/components/Footer/Footer';
import Search from './components/Search/Search'
import '../src/App.css'

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?&api_key=b5138e06a3a9125b8c326498bbeae997&query='

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <Switch>
              <Route path='/:movieType' component={Movies} exact/>
              <Route path='/search/movie' component={Search} />
            </Switch>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
