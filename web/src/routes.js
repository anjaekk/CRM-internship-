import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// PAGES
import Login from './Pages/Login/index';
import Signup from './Pages/Signup/index';
import Calendar from './Components/Atoms/Calendar/Calendar';

function routes() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} /> */}
        <Route exact path="/calendar" component={Calendar} />
      </Switch>
    </Router>
  );
}

export default routes;
