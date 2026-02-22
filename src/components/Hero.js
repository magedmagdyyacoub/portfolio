import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import "../index.css";

const Hero = () => {
  const { language } = useContext(LanguageContext);

  const text = {
    en: {
      welcome: "Welcome to My Portfolio",
      intro:
        "I'm Maged Magdy, a Full Stack Web Developer specialized in Node.js, Express, PostgreSQL, and React.",
    },
    ar: {
      welcome: "مرحبًا بكم في ملفي الشخصي",
      intro:
        "أنا ماجد مجدي، مطور ويب متكامل متخصص في Node.js وExpress وPostgreSQL وReact.",
    },
  };

  const current = text[language];

  return (<div className="d-flex flex-column justify-content-start align-items-center text-center">

      <div className="hero-text-wrapper">
        <h1 className="fw-bold mb-3 gradient-text">{current.welcome}</h1>
        <p className="lead intro-text">{current.intro}</p>
      </div>
    </div>
  );
};

export default Hero;
