import React from "react";
import "../styles/hero2.css";

const Hero2 = () => {
  return (
    <div className="hero2-wrapper d-flex justify-content-center align-items-center position-relative">
      {/* نقاط على الشمال */}
      <div className="dots-left">
        <div className="column">
          {[...Array(5)].map((_, i) => (
            <span key={`left-blue-${i}`} className="dot dot-blue"></span>
          ))}
        </div>
        <div className="column">
          {[...Array(5)].map((_, i) => (
            <span key={`left-purple-${i}`} className="dot dot-purple"></span>
          ))}
        </div>
      </div>

      {/* المربع بالصورة */}
      <div className="gradient-box2 position-relative">
      <img src="/assets/me.png" alt="Maged" className="box-image" />

      </div>

      {/* نقاط على اليمين */}
      <div className="dots-right">
        <div className="column">
          {[...Array(5)].map((_, i) => (
            <span key={`right-blue-${i}`} className="dot dot-blue"></span>
          ))}
        </div>
        <div className="column">
          {[...Array(5)].map((_, i) => (
            <span key={`right-purple-${i}`} className="dot dot-purple"></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero2;
