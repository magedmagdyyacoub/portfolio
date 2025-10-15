import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import "../styles/projects.css";

const Projects = () => {
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const text = {
    en: {
      title: "My Projects",
      subtitle: "Here are some of the projects I’ve worked on recently.",
    },
    ar: {
      title: "مشاريعي",
      subtitle: "بعض المشاريع التي عملت عليها مؤخرًا.",
    },
  };

  const current = text[language];

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "Full-stack store built using Node.js, Express, PostgreSQL, and React.",
    image: "/images/projects/ecommerce.png",
    demoLink: "https://example.com/demo1",
    codeLink: "https://github.com/magedmagdyyacoub/ecommerce-app",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Personal portfolio built with React and Bootstrap.",
    image: "/images/projects/portfolio.png",
    demoLink: "https://example.com/demo2",
    codeLink: "https://github.com/magedmagdyyacoub/portfolio",
  },
  {
    id: 3,
    title: "Blog Platform",
    description: "Blog website with authentication and CRUD features.",
    image: "/images/projects/blog.png",
    demoLink: "https://example.com/demo3",
    codeLink: "https://github.com/magedmagdyyacoub/blog-platform",
  },
];


  return (
    <section
      className={`projects-section ${darkMode ? "dark-mode text-light" : "light-mode text-dark"}`}
    >
      <Container>
        <h2 className="projects-title gradient-text">{current.title}</h2>
        <p className="projects-subtitle">{current.subtitle}</p>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
