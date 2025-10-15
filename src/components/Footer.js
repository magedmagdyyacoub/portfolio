import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/footer.css";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const text = {
    en: {
      rights: "All Rights Reserved.",
      madeBy: "Developed by",
    },
    ar: {
      rights: "جميع الحقوق محفوظة.",
      madeBy: "تم التطوير بواسطة",
    },
  };

  const current = text[language];

  return (
    <footer
      className={`footer-section ${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <div className="footer-container">
        <div className="footer-social">
          <a
            href="https://github.com/magedmagdyyacoub"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/maged-magdy-7188402a2"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:magedmagdyyacoub3@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        <p className="footer-text">
          © {new Date().getFullYear()} {current.rights} <br />
          {current.madeBy} <span className="gradient-text">Maged Magdy</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
