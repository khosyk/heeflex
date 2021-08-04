/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Home from "../Home";
import Search from "../Search";
import TV from "../TV";
import Header from "Components/Header";
import Detail from "../Detail";

export default () => {
    return (
        <Router>
            <>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/tv" component={TV} />
                    <Route path="/search" component={Search} />
                    <Route path="/tv/:id" component={Detail} />
                    <Route path="/movie/:id" component={Detail} />
                    <Redirect from="*" to="/" />
                </Switch>
            </>
        </Router>
    );
};
