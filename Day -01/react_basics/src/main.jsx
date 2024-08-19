import React from "react";
import ReactDOM from "react-dom/client";
import './App.css';

 const Nav = function () {return(<img src="/react-logo.png" alt="react logo" className="nav-logo"/>)}
  

const Content = function (){ return(
  <div>
    <h1>Fun facts about React </h1>
    <ul>
      <li>Was released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has Well over 100k stars on github</li>
      <li>Is maintained by Facebook</li>
      <li>Powers millions of enterprise apps, including mobile apps</li>
    </ul>
  </div>
)}
const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<div>
  <Nav /><Content />
</div>);
