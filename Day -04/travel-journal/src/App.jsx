import Nav from "./Components/Nav/Nav";
import Card from "./Components/Card/Card";
import "./App.css"
import data from "./Data/Data";
const App = ()=>{
  const details = data.map(item=>{
    return(
      <div>
        <Card 
       item = {item}
      />
      <hr className="hr"/>
      </div>
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