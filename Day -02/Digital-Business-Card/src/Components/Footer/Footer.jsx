import React from "react";
import twitter from "../../assets/Twitter Icon.png"
import github from "../../assets/Github Icon.png"
import instagram from "../../assets/instagram Icon.png"
import "./footer.css"

function Footer(){
  return(
    <footer className="header2">
      <div className="social-logos">
        <a href=""><img src={twitter} alt="footer" /></a>
        <a href="https://github.com/Deepakr07?tab=overview&from=2023-02-01&to=2023-02-23"><img src={github} alt="footer" /></a>
        <a href="https://www.instagram.com/deepxk.r/"><img src={instagram} alt="footer" /></a>
      </div>
    </footer>
  )
}

export default Footer