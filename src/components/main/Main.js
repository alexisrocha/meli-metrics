import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Single from "../single/Single";
import List from "../list/List";
import Metric from "../metric/Metric";

export default (props) => (
  <div id="main">
    <Navbar />
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => <Single history={props.history} />}
      />
      <Route path="/list" component={List} />
    </Switch>
  </div>
);
