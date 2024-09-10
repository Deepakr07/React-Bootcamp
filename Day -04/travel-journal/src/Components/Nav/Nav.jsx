import globe from "../../../public/Globe.png";
import "./Nav.css"

const Nav = function (){
  return(
    <nav className="nav">
      <div className="nav-content">
        <img src={globe} alt="globeimage" />
        <p>my travel journal</p>
      </div>
    </nav>
  )
}
export default Nav