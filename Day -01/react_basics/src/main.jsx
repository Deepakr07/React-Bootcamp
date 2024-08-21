import React from "react";
import ReactDOM from "react-dom/client";
import './App.css';

//  const Nav = function () {return(<img src="/react-logo.png" width = "40px "alt="react logo"/>)}
  

// const Content = function (){ return(
//   <div>
//     <h1>Fun facts about React </h1>
//     <ul>
//       <li>Was released in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has Well over 100k stars on github</li>
//       <li>Is maintained by Facebook</li>
//       <li>Powers millions of enterprise apps, including mobile apps</li>
//     </ul>
//   </div>
// )}
// const rootElement = ReactDOM.createRoot(document.getElementById("root"));
// rootElement.render(<div>
//   <Nav /><Content />
// </div>);

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