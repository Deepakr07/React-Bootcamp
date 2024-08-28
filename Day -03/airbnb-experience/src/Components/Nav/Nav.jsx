import navLogo from "../../../Assets/nav-logo.png";
import "./nav.css";
const Nav = () =>{
  return(
    <header>
      <nav className="nav">
        <img src={navLogo} alt="nav logo" />
      </nav>
    </header>
  )
}
export default Nav