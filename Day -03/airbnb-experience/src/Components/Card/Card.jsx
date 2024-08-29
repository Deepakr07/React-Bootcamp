import CardImg from "../../../Assets/card-img1.png";
import CardStar from "../../../Assets/star.png";
import "./Card.css"
const Card = ()=>{
  return(
    <div className="card-container">
      <div className="card-img"><img src={CardImg} alt="card-image" /></div>
      <div className="card-content">
        <div className="row-1">
          <img src={CardStar} alt="cardstar" />
          <p className="rating">5.0 <span className="country-code"> (6).USA</span></p>
        </div>
        <div className="row-2"><p>Life Lessons with Katie Zeferes</p></div>
        <div className="row-3"><p><strong>From $138/ </strong>Person</p></div>
      </div>
    </div>
  )
}
export default Card