import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Components/Home";
import NotFound from "../Components/NotFound";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;
