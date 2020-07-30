import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Single from "../single/Single";
import Versus from "../versus/Versus";
import List from "../list/List";
import Metric from "../metric/Metric";
import { useDispatch, useSelector } from "react-redux";
export default (props) => {
  const charts = useSelector((store) => store.chart.charts);
  const selectedChart = useSelector((store) => store.chart.selectedChart);

  useEffect(() => {}, [selectedChart]);

  return selectedChart == -1 ? (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Single history={props.history} />}
        />
        <Route exact path="/versus" component={Versus} />
      </Switch>
    </div>
  ) : (
    <div>
      {charts[selectedChart] && charts[selectedChart].type == "simple" ? (
        <Redirect from="/list" to="/" />
      ) : null}
      {charts[selectedChart] && charts[selectedChart].type == "versus" ? (
        <Redirect from="/list" to="/versus" />
      ) : null}

      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Single history={props.history} />}
        />
        <Route exact path="/versus" component={Versus} />
      </Switch>
    </div>
  );
};
