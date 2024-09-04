import Nav from "./Components/Nav/Nav";
import Hero from "./Components/Hero/Hero";
import Card from "./Components/Card/Card";
import cardDetails from "./Components/CardDetails/CardDetails";
import "./App.css"
const App = ()=>{
  const cardElements = cardDetails.map(details=>{
    return <Card img = {details.coverImg}
                 rating = {details.stats.rating}
                 reviewCount = {details.stats.reviewCount}
                 countryName = {details.location}
                 cardName = {details.title}
                 price = {details.price}  
    />
  })
  return(
    <div className="container">
      <Nav />
      <Hero />
      <div className="card-container">
        {cardElements}
        
      </div>
    </div>
  )
}
export default App;