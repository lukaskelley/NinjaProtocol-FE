import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "bootstrap/dist/css/bootstrap.css";
import "./app.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store = {store}>
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
