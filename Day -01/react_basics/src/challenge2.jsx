import React from "react"
import ReactDOM from "react-dom/client"
import "./challenge2.css"
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";



const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<div className="hero">
  <Header />
  <MainContent/>
  <Footer className="footer"/>
</div>);