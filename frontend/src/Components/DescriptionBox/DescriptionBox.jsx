import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
        This year's fashion scene is all about embracing fun and comfort. Bold florals and Y2K throwbacks add a playful touch, while oversized silhouettes and athleisure's rise prioritize ease. Denim remains a must-have, and knits are back in a big way. Sustainability continues to be a focus, with secondhand finds and natural fabrics trending. In India, fusion styles, handloom love, and modern ethnic wear offer unique ways to express your cultural flair. So, have fun and experiment!
        </p>
        <p>
          E-commerce websites typically display products or services along with
          detailed descriptions, images, prices, and any available variations
          (e.g., sizes, colors). Each product usually has its own dedicated page
          with relevant information.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
