import Nav from "./Components/Nav/Nav";
import Hero from "./Components/Hero/Hero";
import Card from "./Components/Card/Card";
import "./App.css"
const App = ()=>{
  return(
    <div className="container">
      <Nav />
      <Hero />
      <Card />
    </div>
  )
}
export default App;