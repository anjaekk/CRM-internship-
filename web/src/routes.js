import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// PAGES
import Login from './Pages/Login/index';
import Signup from './Pages/Signup/index';

function routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
}

export default routes;
