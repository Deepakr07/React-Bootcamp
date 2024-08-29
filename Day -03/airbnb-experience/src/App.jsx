import Nav from "./Components/Nav/Nav";
import Hero from "./Components/Hero/Hero";
import Card from "./Components/Card/Card";
import "./App.css"
const App = ()=>{
  return(
    <div className="container">
      <Nav />
      <Hero />
      <Card 
        img = "../Assets/card-img1.png"
        rating = "5"
        countryCode = "6"
        courntryName = "USA"
        cardName = "Life Lessons with Katie Zeferes"
        price = "$138"
      />
    </div>
  )
}
export default App;