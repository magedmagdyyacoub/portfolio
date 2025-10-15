import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import "../styles/projects.css";

const ProjectCard = ({ project }) => {
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();

  const text = {
    en: { live: "Live Demo", code: "View Code" },
    ar: { live: "عرض مباشر", code: "عرض الكود" },
  };

  const current = text[language];

  return (
    <div
      className={`project-card ${darkMode ? "dark-card" : "light-card"}`}
      onClick={() => navigate(`/projects/${project.id}`)}
      style={{ cursor: "pointer" }}
    >
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-info">
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        <div className="project-buttons">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn ${darkMode ? "btn-outline-light" : "btn-outline-dark"}`}
            onClick={(e) => e.stopPropagation()} // عشان ما يفتحش صفحة التفاصيل لما تدوس على الزر
          >
            {current.live}
          </a>
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn ${darkMode ? "btn-light" : "btn-dark"}`}
            onClick={(e) => e.stopPropagation()}
          >
            {current.code}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
