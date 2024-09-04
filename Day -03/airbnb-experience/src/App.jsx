import Nav from "./Components/Nav/Nav";
import Hero from "./Components/Hero/Hero";
import Card from "./Components/Card/Card";
import cardDetails from "./Components/CardDetails/CardDetails";
import "./App.css"
const App = ()=>{
  const cardElements = cardDetails.map(details=>{
    return <Card img = {details.img}
                 rating = {details.rating}
                 countryCode = {details.countryCode}
                 countryName = {details.countryName}
                 cardName = {details.cardName}
                 price = {details.price}  
    />
  })
  return(
    <div className="container">
      <Nav />
      <Hero />
      {cardElements}
    </div>
  )
}
export default App;