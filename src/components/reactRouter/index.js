import React from "react";

// React Router

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// css files
import "../../css/reactRouter.css";

// page Links

import Home from "./Home";
import About from "./About";
import Error from "./Error";
import People from "./People";
import Person from "./Person";

// Navbar Links
import Navbar from "./NavBar";

const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/person/:id" children={<Person />}></Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
