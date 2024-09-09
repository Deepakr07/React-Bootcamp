import Nav from "./Components/Nav/Nav";
import Hero from "./Components/Hero/Hero";
import Card from "./Components/Card/Card";
import cardDetails from "./Components/CardDetails/CardDetails.js";
import "./App.css"
const App = ()=>{
  const cardElements = cardDetails.map(details=>{
   
    return <Card 
                details = {details}  
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