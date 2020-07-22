import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import Main from "./components/main/Main";
import List from "./components/list/List";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
const history = createBrowserHistory();
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={Main} />
    </Router>
  </Provider>,
  document.getElementById("app")
);
