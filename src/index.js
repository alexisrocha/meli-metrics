import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Main from "./components/main/Main";
import List from "./components/list/List";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Provider store={store}>
    <MemoryRouter>
      <Route path="/" component={Main} />
    </MemoryRouter>
  </Provider>,
  document.getElementById("app")
);
