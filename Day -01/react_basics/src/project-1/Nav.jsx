import React from 'react'
import "./style.css";

function Nav(){
  return(
    <nav>
      <div className="nav-left">
        <img src="./react-logo.png" alt="react-logo" className='react-logo'/>
        <p className='nav-title'>ReactFacts</p>
      </div>
      <div className="nav-right">
        React Course - Project 1
      </div>
    </nav>
  )

}

export default Nav