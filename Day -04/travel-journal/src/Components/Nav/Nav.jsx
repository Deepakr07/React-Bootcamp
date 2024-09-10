import globe from "../../../public/Globe.png";
import "./Nav.css"

const Nav = function (){
  return(
    <nav className="nav">
      <div className="nav-content">
        <img src={globe} alt="globeimage" />
        <span>my travel journal</span>
      </div>
    </nav>
  )
}
export default Nav