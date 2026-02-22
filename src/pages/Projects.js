import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import "../styles/projects.css";

const Projects = () => {
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const text = {
    en: {
      title: "My Projects",
      subtitle: "Here are some of the projects I've worked on recently.",
      prev: "Previous",
      next: "Next",
    },
    ar: {
      title: "مشاريعي",
      subtitle: "بعض المشاريع التي عملت عليها مؤخرًا.",
      prev: "السابق",
      next: "التالي",
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
    {
      id: 4,
      title: "Shop hub",
      description:
        "Modern Next.js ecommerce site delivering speed, security, and seamless shopping experiences.",
      image: "/images/projects/shophub.png",
    
      codeLink: "https://github.com/magedmagdyyacoub/imagination",
    },
    {
  id: 5,
  title: "Social",
  description:
    "A modern social media app with clean design, built for seamless interaction and content sharing.",
  image: "/images/projects/social.png",
  codeLink: "https://github.com/magedmagdyyacoub/social", // ← عدلها لو مختلف
},
{
  id: 6,
  title: "Egyptian Museum Website",
  description:
    "An elegant, informative website showcasing Egypt’s rich history and artifacts with a modern UI.",
  image: "/images/projects/museum.png",
  codeLink: "https://github.com/magedmagdyyacoub/egyptianmuseum", // ← عدلها لو مختلف
},
{
  id: 7,
  title: "Food Blog Website",
  description:
    "A vibrant, recipe-rich platform celebrating fresh ingredients and culinary creativity with a modern UI.",
  image: "/images/projects/foodblog.png",
  codeLink: "https://github.com/magedmagdyyacoub/foodblog", // ← عدلها لو مختلف
},
{
  id: 8,
  title: "Food Blog Website",
  description:
    "A modern ecommerce platform with intuitive shopping features, secure checkout, and responsive design.",
  image: "/images/projects/shop.png",
  codeLink: "https://github.com/magedmagdyyacoub/foodblog", // ← عدلها لو مختلف
},
{
  id: 9,
  title: "HealthHub Website",
  description:
    "A clean, user-friendly healthcare platform offering medical resources, appointment booking, and wellness tracking.",
  image: "/images/projects/healthhub.png",
  codeLink: "https://github.com/magedmagdyyacoub/healthhub", // ← عدلها لو مختلف
},
{
  id: 10,
  title: "EcomEase Website",
  description:
    "A sleek, minimalist ecommerce platform featuring fashion products, intuitive navigation, and a responsive product grid with shopping cart integration.",
  image: "/images/projects/ecomease.png",
  codeLink: "https://github.com/magedmagdyyacoub/ecomease", // ← عدلها لو مختلف
},
{
  id: 11,
  title: "JobSearch Website",
  description:
    "A clean, intuitive job search platform helping users find opportunities, explore company reviews, and apply with ease through a responsive interface.",
  image: "/images/projects/job.png",
  codeLink: "https://github.com/magedmagdyyacoub/jobquest", // ← عدلها لو مختلف
},
{
  id: 12,
  title: "Mart Website",
  description:
    "A vibrant ecommerce platform designed for everyday shopping, featuring colorful branding, intuitive navigation, and a dynamic product showcase.",
  image: "/images/projects/mart.png",
  codeLink: "https://github.com/magedmagdyyacoub/mart", // ← عدلها لو مختلف
},
{
  id: 13,
  title: "ToDo App",
  description:
    "A minimalist productivity app designed to help users manage daily tasks with a clean interface, intuitive controls, and real-time updates.",
  image: "/images/projects/todo.png",
  codeLink: "https://github.com/magedmagdyyacoub/todo", // ← عدلها لو مختلف
},
{
  id: 14,
  title: "Online Store",
  description:
    "A modern ecommerce platform with intuitive shopping features, secure checkout, and responsive design.",
  image: "/images/projects/online.png",
  codeLink: "https://github.com/magedmagdyyacoub/onlinestore", // ← عدلها لو مختلف
},
{
  id: 15,
  title: "PM Tool Website",
  description:
    "A vibrant project management platform designed to streamline team collaboration, task tracking, and scheduling through a colorful, responsive interface.",
  image: "/images/projects/pm.png",
  codeLink: "https://github.com/magedmagdyyacoub/pmtool", // ← عدلها لو مختلف
},
{
  id: 16,
  title: "Portfolio Website",
  description:
    "A professional portfolio platform showcasing projects, skills, and achievements with a modern design, responsive layout, and bilingual content support.",
  image: "/images/projects/portfolio.png",
  codeLink: "https://github.com/magedmagdyyacoub/portfolio", // ← عدلها لو مختلف
}










  ];

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = projectsData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(projectsData.length / itemsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  return (
    <section
      className={`projects-section ${darkMode ? "dark-mode text-light" : "light-mode text-dark"}`}
    >
      <Container>
        <h2 className="projects-title gradient-text">{current.title}</h2>
        <p className="projects-subtitle">{current.subtitle}</p>
        <div className="projects-grid">
          {currentProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="pagination-container">
            <button
              className={`pagination-btn ${darkMode ? "dark-pagination" : "light-pagination"} ${currentPage === 1 ? "disabled" : ""}`}
              onClick={goToPrevPage}
              disabled={currentPage === 1}
            >
              {current.prev}
            </button>
            
            <div className="pagination-numbers">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                <button
                  key={pageNumber}
                  className={`pagination-number ${currentPage === pageNumber ? "active" : ""} ${darkMode ? "dark-pagination" : "light-pagination"}`}
                  onClick={() => paginate(pageNumber)}
                >
                  {pageNumber}
                </button>
              ))}
            </div>
            
            <button
              className={`pagination-btn ${darkMode ? "dark-pagination" : "light-pagination"} ${currentPage === totalPages ? "disabled" : ""}`}
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
            >
              {current.next}
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Projects;
