import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Single from "../single/Single";
import Versus from "../versus/Versus";
import Alarms from "../alarms/Alarms";
import List from "../list/List";
import Metric from "../metric/Metric";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Container from "../Container/Container";

export default (props) => {
  return (
    <div id="main">
      <Navbar />
      <Switch>
        <Route exact path="/list" component={List} />
        <Route exact path="/alarms" component={Alarms} />
        <Route path="/" render={(props) => <Container />} />
      </Switch>
    </div>
  );
};
