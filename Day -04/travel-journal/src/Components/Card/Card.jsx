import "./Card.css"
import locationpin from "../../../public/location-icon.png"

console.log(locationpin)
const Card = ()=>{
  return(
    <div className="card">
      <div className="left">
        <div className="location-div">
          <img src="https://scrimba.com/links/travel-journal-japan-image-url" alt="location image" className="location-img"/>
        </div>
      </div>
      <div className="right">
        <div className="right-content">
          <div className="row-1">
            <img src={locationpin} alt="location image" />
            <span className="location-name">JAPAN</span>
            <span className="map"><a href="">View on Google Maps</a></span>
          
          </div>
          <div className="row-2">
          <h1>Mount Fuji</h1>
          </div>
          <div className="row-3"><h3>12 Jan, 2021 - 24 Jan, 2021</h3></div>
          <div className="row-4"><p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p></div>
                </div>
        </div>
    </div>
  )
}

export default Card