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
    title: "E-SHOPPER PLATFORM",
    description: "Full-stack store built using Node.js, Express, PostgreSQL, and React.",
    image: "/images/projects/eshopper.png",
    demoLink: "https://eshopper2.vercel.app",
    codeLink: "https://github.com/magedmagdyyacoub/Eshopper2",
  },
  {
    id: 2,
    title: "BOOKING SYSTEM",
    description: "Booking system Through all over Big places in Egypt.Includes dark mode and light mode, responsive design, and animated transitions , Admin dashboard to manage bookings and users.",
    image: "/images/projects/booking.png",
    demoLink: "https://bookingsystem-khaki.vercel.app",
    codeLink: "https://github.com/magedmagdyyacoub/booking-system",
  },
  {
    id: 3,
    title: "TMNT BLOG PLATFORM",
    description: "Blog website with authentication and CRUD features.",
    image: "/images/projects/tmnt.png",
    demoLink: "https://tmnt-rc7k.vercel.app",
    codeLink: "https://github.com/magedmagdyyacoub/TMNT-BLOG",
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
