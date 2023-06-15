import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/js/bootstrap.esm.js";
//import bootstrap icons
import "bootstrap-icons/font/bootstrap-icons.css";
//import styles
import "./assets/css/Style.css";
import "./assets/css/StyleAdmin.css";
import "./assets/css/StyleArtesanias.css";
import "./assets/css/StyleAprendiz.css";
import "./assets/css/StyleCulturaypaz.css";
import "./assets/css/styleiddz.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

try {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
} catch (error) {
  console.log(error);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
