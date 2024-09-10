import Nav from "./Components/Nav/Nav";
import Card from "./Components/Card/Card";
import "./App.css"
const App = ()=>{
  return(
    <div className="container">
      <Nav />
      <div className="hero">
        <div className="card-container">
          <Card />
        </div>
      </div>
    </div>
  )
}
export default App