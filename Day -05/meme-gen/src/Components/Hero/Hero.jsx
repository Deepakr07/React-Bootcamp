import "./Hero.css"
import heroimage from "../../assets/hero-image.png"
function Hero(){
  return(
    <div className="hero">
      <div className="container">
        <div className="input-fields">
        <div class="input-group">
        <label for="text1">Top Text</label>
        <input type="text" id="text1" placeholder="Enter text here..." className="text"/>
    </div>
    <div class="input-group">
        <label for="text2">Bottom Text</label>
        <input type="text" id="text2" placeholder="Enter text here..." className="text"/>
    </div>
        </div>
        <div className="row3">
          <div className="submit-button-div">
            Get a new meme image🌀
          </div>
        </div>
        <div className="row4">
          <img src={heroimage} alt="" className="hero-image"/>
        </div>
      </div>
    </div>
  )
}
export default Hero