import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// PAGES
import Login from './Pages/Login/index';
import Signup from './Pages/Signup/index';
// import Calendar from './Pages/Calendar/index';
// import Contact from './Pages/Contact/index';

function routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        {/* <Route exact path="/" component={Calendar} /> */}
        {/* <Route exact path="/" component={Contact} /> */}
      </Switch>
    </Router>
  );
}

export default routes;
