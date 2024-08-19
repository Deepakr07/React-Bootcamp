import React from "react";
import ReactDOM from "react-dom/client";

const nav = (
  <nav>
    <h1>Amazon</h1>
    <ul>
      <li>Menu</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(nav);
