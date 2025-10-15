import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/projects.css";

const allProjects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "Full-stack e-commerce app using Node.js, Express, PostgreSQL, and React.",
    image: "/images/projects/ecommerce.png",
    liveUrl: "https://example.com/demo1",
    github: "https://github.com/magedmagdyyacoub/ecommerce-app",
    technologies: ["React", "Node.js", "Express", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "My personal portfolio built with React and Bootstrap.",
    image: "/images/projects/portfolio.png",
    liveUrl: "https://example.com/demo2",
    github: "https://github.com/magedmagdyyacoub/portfolio",
    technologies: ["React", "Bootstrap"],
  },
  {
    id: 3,
    title: "Blog Platform",
    description: "Blog website with authentication and CRUD features.",
    image: "/images/projects/blog.png",
    liveUrl: "https://example.com/demo3",
    github: "https://github.com/magedmagdyyacoub/blog-platform",
    technologies: ["Node.js", "Express", "MongoDB", "EJS"],
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = allProjects.find((p) => p.id === Number(id));

  if (!project) return <h2 className="text-center mt-5">Project not found</h2>;

  return (
    <div className="project-details container py-5">
      <Link to="/projects" className="btn btn-outline-primary mb-4">
        ← Back to Projects
      </Link>
      <h2 className="gradient-text mb-3">{project.title}</h2>
      <img src={project.image} alt={project.title} className="img-fluid rounded mb-4" />
      <p className="lead">{project.description}</p>

      <h5 className="mt-4">Technologies:</h5>
      <ul>
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>

      <div className="mt-4">
        <iframe
          src={project.liveUrl}
          title={project.title}
          style={{ width: "100%", height: "500px", border: "1px solid #ccc", borderRadius: "8px" }}
        ></iframe>
      </div>

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-dark mt-3"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectDetails;
