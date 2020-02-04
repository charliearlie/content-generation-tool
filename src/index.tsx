import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const theme = {
  headerHeight: "70px",
  colours: {
    grover: "#033954",
    tipsterGrey: "#6f6c6c",
    rosita: "#00dd99"
  }
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
