import CardStar from "../../../Assets/star.png";
import "./Card.css"
const Card = (props)=>{
  return(
    <div className="card">
      {props.status === 0 && <div className="top-text">SOLD OUT</div>}
      <div className="card-img"><img src={props.details.coverImg} alt="card-image" /></div>
      
      <div className="card-content">
        <div className="row-1">
          <img src={CardStar} alt="cardstar" />
          <p className="rating">{props.details.stats.rating} <span className="country-code"> ({props.details.stats.reviewCount}).{props.details.location}</span></p>
        </div>
        <div className="row-2"><p>{props.details.title}</p></div>
        <div className="row-3"><p><strong>From ${props.details.price}</strong> /Person</p></div>
      </div>
    </div>
  )
}
export default Card