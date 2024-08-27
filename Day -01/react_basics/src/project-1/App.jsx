import React from "react";
import ReactDOM from "react-dom"
import "./style.css"
import Header from "./Header";
import MainComponent from "./MainContent";

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<>
  <Header />
  <MainComponent />

</>);