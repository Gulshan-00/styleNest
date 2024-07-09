import React from "react";
import "./Hero.css";
// import hero_image from "../Assets/hero_image.png";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_img from "../../Components/Assets/hero_img.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div >
          <div className="hero-hand-icon" >
            <p>Latest</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>collections</p>
          <p>for fashionista</p>
        </div>
        <div className="hero-latest-btn">
          <div><a href="#new-col">Latest Collection</a></div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        {/* <img src={hero_image} alt="hero" /> */}
        {/* <img src={hero_image} alt="hero" /> */}
        <img src={hero_img} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
