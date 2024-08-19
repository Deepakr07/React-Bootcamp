import React from "react";
import ReactDOM from "react-dom/client"

 const samplePage = (
    <div>
      <h1>Hello this is h1</h1>
      <h2>Hello this is h2</h2>
      <h3>Hello this is h3</h3>
      <h4>Hello this is h4</h4>
    </div>
 );

 const rootElement=ReactDOM.createRoot(document.getElementById("root"));

rootElement.render(samplePage)