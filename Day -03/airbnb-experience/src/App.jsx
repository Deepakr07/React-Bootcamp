import Nav from "./Components/Nav/Nav";
import Hero from "./Components/Hero/Hero";
import Card from "./Components/Card/Card";
import cardDetails from "./Components/CardDetails/CardDetails.js";
import "./App.css"
const App = ()=>{
  const cardElements = cardDetails.map(details=>{
    let statusText = "";
    if(details.openSpots>0){
      statusText = "AVAILABLE"

    }
    else statusText = "SOLD OUT"
    return <Card img = {details.coverImg}
                 rating = {details.stats.rating}
                 reviewCount = {details.stats.reviewCount}
                 countryName = {details.location}
                 cardName = {details.title}
                 price = {details.price}
                 status = {statusText}  
    />
  })
  return(
    <div className="container">
      <Nav />
      <Hero />
      <div className="card-container">
        {cardElements}
        {cardElements}
        
      </div>
    </div>
  )
}
export default App;