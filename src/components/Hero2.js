import React from "react";
import "../styles/hero2.css";

const Hero2 = () => {
  return (
    <div className="hero2-wrapper d-flex justify-content-center align-items-center position-relative">
      {/* المربع بالصورة */}
      <div className="gradient-box2 position-relative">
        <img src="/assets/me.png" alt="Maged" className="box-image" />
      </div>
    </div>
  );
};

export default Hero2;
