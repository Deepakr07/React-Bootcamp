import "./Nav.css"
import logo from "../../assets/nav-image.png"
function Nav(){
  return(
    <nav className="nav">
      <div className="nav-left">
        <div className="logo"><img src={logo} alt="" /></div>
        <h3>Meme Generator</h3>
      </div>
      <div className="nav-right">
        <h4>React Course - Project 3</h4>
      </div>
    </nav>
  )
}
export default Nav