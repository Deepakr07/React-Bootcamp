import React from "react"
import ReactDOM from "react-dom/client"
import "./challenge2.css"
function Header(){
  return(
    <header>
      <nav className="nav">
        <img src = "./react-logo.png"  className="logo" / >
        <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
      </nav>
   </header>
  )
}


function Page() {
    return (
        <div>            
            <h1>Reasons why I am excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                 able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )
}

function Footer(){
  return(
    <footer><p>© 2024 Deepak development. All rights reserved.</p></footer>
  )
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<div>
  <Header />
  <Page />
  <Footer/>
</div>);