import CardStar from "../../../Assets/star.png";
import "./Card.css"
const Card = (props)=>{
  return(
    <div className="card">
      <div className="card-img"><img src={props.img} alt="card-image" /></div>
      <div className="card-content">
        <div className="row-1">
          <img src={CardStar} alt="cardstar" />
          <p className="rating">{props.rating} <span className="country-code"> ({props.reviewCount}).{props.countryName}</span></p>
        </div>
        <div className="row-2"><p>{props.cardName}</p></div>
        <div className="row-3"><p><strong>From ${props.price}</strong> /Person</p></div>
      </div>
    </div>
  )
}
export default Card