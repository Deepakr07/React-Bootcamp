import heroImage from "../../../Assets/hero-img.png";
import "./Hero.css";
const Hero = ()=>{
  return(
    <div className="hero">
      <img src={heroImage} className="hero-image"/>
      <h1>Enjoy the Magic of Airbnb Experiences From the Comfort of Your Home</h1>
      <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.From cooking classes with renowned chefs to virtual tours of stunning destinations, our curated experiences bring excitement directly to you. Connect with passionate experts and like-minded participants without ever leaving your living room. Discover new skills, cultures, and adventures in the comfort of your home. Explore a diverse range of activities and make unforgettable memories. Your next great experience is just a click away.</p>
    </div>
  )
}
export default Hero