import React from "react";
import ReactDOM from "react-dom/client";

// Exercise - 2 
// Part 1: Create a page of your own using a custom Page component

// It should return an ordered list with the reasons why you're
// excited to be learning React :)

// Render your list to the page

const List = ()=>{
 return(
  <ol>
  <li>Understand fundamentals of react</li>
  <li>Develop user friendly high quality webpages</li>
  <li>Make development more easier</li>
</ol>
 )
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

rootElement.render(<List />);