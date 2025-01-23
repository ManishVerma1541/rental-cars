import React from "react";
import ReactDOM from "react-dom"
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Mystore from "./Store/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Mystore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
