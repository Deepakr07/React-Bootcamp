import "./Card.css"
import locationpin from "../../../public/location-icon.png"

console.log(locationpin)
const Card = (props)=>{
  return(
    <div className="card">
      <div className="left">
        <div className="location-div">
          <img src={props.image} alt="location image" className="location-img"/>
        </div>
      </div>
      <div className="right">
        <div className="right-content">
          <div className="row-1">
            <img src={locationpin} alt="location image" />
            <span className="location-name">{props.location}</span>
            <span className="map"><a href={props.googleMapsUrl}>View on Google Maps</a></span>
          
          </div>
          <div className="row-2">
          <h1>{props.title}</h1>
          </div>
          <div className="row-3"><h3>{props.startDate} - {props.endDate}</h3></div>
          <div className="row-4"><p>{props.description}</p></div>
                </div>
        </div>
    </div>
  )
}

export default Card