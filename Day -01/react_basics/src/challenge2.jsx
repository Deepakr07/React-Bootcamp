import React from "react"
import ReactDOM from "react-dom/client"

function Page() {
    return (
        <div>
            <header>
                <nav>
                    <img src = "./react-logo.png" width = "40px"/>
                </nav>
            </header>
            <h1>Reasons why I am excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                 able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
            <footer><p>© 2024 Deepak development. All rights reserved.</p></footer>
         
        </div>
    )
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<Page />);