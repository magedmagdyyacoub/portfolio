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
    en: { live: "Live Demo", code: "View Code", gallery: "Gallery" },
    ar: { live: "عرض مباشر", code: "عرض الكود", gallery: "معرض الصور" },
  };

  const current = text[language];

  // Check if demoLink exists
  const hasDemoLink = project.demoLink && project.demoLink.trim() !== "";
  // Check if images array exists (for gallery)
  const hasGallery = project.images && project.images.length > 0;

  const handleGalleryClick = (e) => {
    e.stopPropagation();
    navigate(`/projects/${project.id}`);
  };

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
          {hasDemoLink ? (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn ${darkMode ? "btn-outline-light" : "btn-outline-dark"}`}
              onClick={(e) => e.stopPropagation()}
            >
              {current.live}
            </a>
          ) : hasGallery ? (
            <button
              className={`btn ${darkMode ? "btn-outline-light" : "btn-outline-dark"}`}
              onClick={handleGalleryClick}
            >
              {current.gallery}
            </button>
          ) : null}
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
