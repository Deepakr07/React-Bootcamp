import React from "react";
import "./style.css";

function MainComponent(){
  return(
    <div className="main">
      <h1>Fun Facts About React</h1>
     <div className="container">
     <ul className="fact-list">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200K stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <img src="./reactjs-icon 2.png" alt="react-logo" />
     </div>
    </div>
  )
}
export default MainComponent