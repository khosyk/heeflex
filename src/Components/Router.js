/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Home from 'Screens/Home.js';
import Movie from 'Screens/Movie';
import Search from 'Screens/Search';
import Tv from 'Screens/Tv';
import Header from 'Components/Header';

export default () => {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tv" component={Tv} />
          <Route path="/movie" component={Movie} />
          <Route path="/search" component={Search} />
          <Redirect from="*" to="/" />
        </Switch>
      </>
    </Router>
  );
};
