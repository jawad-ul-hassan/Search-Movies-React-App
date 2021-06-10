import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';
import MoviesProvider from './components/store/MoviesProvider';

const App = () => {
  return (
    <MoviesProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/movies/:id" children={<MovieDetail />} />
        </Switch>
      </Router>
    </MoviesProvider>
  );
};

export default App;
