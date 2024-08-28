import React from "react";
import ProfileImage from "../../assets/profile.png";
import Email from "../../assets/Mail.png";
import Linkedin from "../../assets/linkedin.png";
import "./ProfileInfo.css";

function ProfileInfo(){

  return(
    <div className="profile-container">
      <img src={ProfileImage} alt="profile-photo" className="profile-photo"/>
      <div className="name-details">
        <span className="header">Deepak R</span>
        <span className="role">Software Developer</span>
        <span className="website">Deepakr07.github</span>
      </div>
      <div className="button-section">
        <button className="button email"><div className="button-container"><img src={Email} alt="" /><a href="mailto:deepakrajesh567@gmail.com" className="mail">Email</a></div></button>
        <button className="button linkedin"><div className="button-container"><img src={Linkedin} alt="" /><a href="https://www.linkedin.com/in/deepak-r-94a1b5239/" className="link">Linkedin</a></div></button>
      </div>
    </div>
  )
}
export default ProfileInfo