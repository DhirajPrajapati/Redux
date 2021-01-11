import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import fromreducer from "./reducer/index";
import { createStore } from "redux";
import { provider } from "react-redux";

const store = createStore(
  fromreducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <provider store={store}>
    <App />
  </provider>,
  document.getElementById("root")
);
