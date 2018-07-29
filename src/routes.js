import React from 'react'
import { IndexRoute, Router, Route, hashHistory } from 'react-router'
import App from './components/App'
import Home from './components/Home'
import Header from './components/Header'

export default (
  <Router history={hashHistory}>
    <Route path="/" component={ App }>
      <IndexRoute component={ Home } />
    </Route>
    <Route path="/header" component={ Header }>
    </Route>
  </Router>
);
