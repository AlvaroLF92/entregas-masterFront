import React from "react";
import logo from "./assets/logo_1.png";
import { createRoot } from "react-dom/client";
import { HelloWorldComponent } from "./helloWorldComponent";
import './styles.scss';

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <HelloWorldComponent/>
    <img src={logo} style={{ width: 150 }} />
  </div>
);

