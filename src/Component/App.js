import React from 'react';
import NavBar from '../Layout/Navbar';
import Home from './Home'
import AboutFilms from './AboutFilm/AboutFilms'
import { Router, Switch, Route } from 'react-router-dom'
import Footer from '../Layout/Footer';
import FavoriteMovies from './FavoriteMovies'
import history from './history'

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div style={{ width: "100%", height: "600px", display: 'flex', flexDirection: "column", justifyContent: "space-between", height: '100vh' }}>
          <NavBar />
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/about/:id" exact component={AboutFilms} />
            <Route path="/favorite" exact component={FavoriteMovies} />
          </Switch>
          <Footer />
        </div>
      </Router >

    );
  }
}

export default App;