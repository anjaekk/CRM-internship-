import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

// ORGANISM
import { Nav } from './Components/Organisms';

// PAGES
import Login from './Pages/Login/index';
import Signup from './Pages/Signup/index';
import Calendar from './Pages/Calendar/index';
import Contact from './Pages/Contact/index';
import SalesDetail from './Pages/SalesDetail/index';
import Performance from './Pages/Performence/index';

import { CALENDAR_URL } from './config';

function routes() {
  // const [al, setAl] = useState(false);

  // const newSchedule = async () => {
  //   try {
  //     const token = localStorage.getItem('token');
  //     const config = {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         'Content-Type': 'application/json',
  //       },
  //     };
  //     const response = await axios.get(`${CALENDAR_URL}/schedule`, config);
  //     if (response) {
  //       console.log(`response`, response);
  //       setAl(true);
  //     }
  //   } catch (error) {
  //     setAl(false);
  //     console.log(error.response);
  //   }
  // };

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />

        {/* <Route
          exact
          path="/calendar"
          render={()=>()}
        /> */}

        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/salesdetail" component={SalesDetail} />
        <Route exact path="/salesdetail/:id" component={SalesDetail} />
        <Route exact path="/performance" component={Performance} />
      </Switch>
    </Router>
  );
}

export default routes;
