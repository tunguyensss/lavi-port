import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./assets/css/_mixin.css";
import "./assets/css/_color.css";
import "./assets/css/_easing.css";

import "./assets/css/_mixin.css";

import "./globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
