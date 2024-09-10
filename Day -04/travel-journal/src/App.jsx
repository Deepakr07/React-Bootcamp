import Nav from "./Components/Nav/Nav";
import Card from "./Components/Card/Card";
import "./App.css"
import data from "./Data/Data";
const App = ()=>{
  const details = data.map(item=>{
    return(
      <Card 
        image = {item.imageUrl}
        title = {item.title}
        location = {item.location}
        googleMapsUrl = {item.googleMapsUrl}
        startDate = {item.startDate}
        endDate = {item.endDate}
        description = {item.description}
      
      />
    )
  })
  console.log({details})
  return(
    <div className="container">
      <Nav />
      <div className="hero">
        <div className="card-container">
          {details}
          
        </div>
      </div>
    </div>
  )
}
export default App