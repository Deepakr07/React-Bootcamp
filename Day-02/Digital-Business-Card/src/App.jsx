import React from "react";
import ReactDOM from "react-dom";
import ProfileInfo from "./Components/ProfileInfo/ProfileInfo";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import "./app.css"

const rootELement = ReactDOM.createRoot(document.getElementById("root"));
rootELement.render(<div className="main-container">
  <div className="container">
<ProfileInfo />
<About />
<Footer />
</div>
</div>
  
)