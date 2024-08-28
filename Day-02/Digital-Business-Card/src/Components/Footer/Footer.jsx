import React from "react";
import twitter from "../../assets/Twitter Icon.png"
import github from "../../assets/Github Icon.png"
import instagram from "../../assets/instagram Icon.png"
import "./footer.css"

function Footer(){
  return(
    <footer className="header2">
      <div className="social-logos">
        <img src={twitter} alt="footer" />
        <img src={github} alt="footer" />
        <img src={instagram} alt="footer" />
      </div>
    </footer>
  )
}

export default Footer