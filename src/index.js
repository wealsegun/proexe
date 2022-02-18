import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from './reportWebVitals';
import store from './redux/stores'
import 'react-notifications/lib/notifications.css';
ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();