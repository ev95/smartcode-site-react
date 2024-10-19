import { menu, lessons, features, socials } from "./data/data.js";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App
    headerMenu={menu}
    courses={lessons}
    features={features}
    socials={socials}
  />
);
