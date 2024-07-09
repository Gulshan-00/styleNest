import React from "react";
import "./Offers.css";
// import exclusive_image from "../Assets/exclusive_image.png";
import exclusive_img2 from "../../../src/Components/Assets/exclusive-img2.png"

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_img2} alt="" />
      </div>
    </div>
  );
};

export default Offers;
