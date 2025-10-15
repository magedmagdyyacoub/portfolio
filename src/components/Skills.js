import React, { useContext } from "react";
import "../styles/skills.css";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaPython,
  FaNpm,
  FaServer,
  FaTerminal,
  FaFigma,
  FaPhp,
  FaLaravel,
  FaDocker,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiPostman,
  SiVite,
  SiRedux,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiJquery,
  SiMysql,
} from "react-icons/si";

const Skills = () => {
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const text = {
    en: {
      title: "My Skills",
      levels: {
        Advanced: "Advanced",
        Intermediate: "Intermediate",
        Beginner: "Beginner",
      },
    },
    ar: {
      title: "مهاراتي",
      levels: {
        Advanced: "متقدم",
        Intermediate: "متوسط",
        Beginner: "مبتدئ",
      },
    },
  };

  const current = text[language];

  const skillsData = [
    // 🔹 Frontend
    { name: "HTML5", icon: <FaHtml5 className="text-danger" />, level: "Advanced" },
    { name: "CSS3", icon: <FaCss3Alt className="text-primary" />, level: "Advanced" },
    { name: "JavaScript", icon: <FaJsSquare className="text-warning" />, level: "Advanced" },
    { name: "TypeScript", icon: <SiTypescript className="text-primary" />, level: "Advanced" },
    { name: "React", icon: <FaReact className="text-info" />, level: "Advanced" },
    { name: "Next.js", icon: <SiNextdotjs className="text-dark" />, level: "Intermediate" },
    { name: "Bootstrap", icon: <FaBootstrap className="text-secondary" />, level: "Advanced" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-info" />, level: "Intermediate" },
    { name: "Redux", icon: <SiRedux className="text-purple" />, level: "Intermediate" },
    { name: "jQuery", icon: <SiJquery className="text-primary" />, level: "Advanced" },

    // 🔹 Backend
    { name: "Node.js", icon: <FaNodeJs className="text-success" />, level: "Advanced" },
    { name: "Express.js", icon: <SiExpress className="text-dark" />, level: "Advanced" },
    { name: "PHP", icon: <FaPhp className="text-primary" />, level: "Advanced" },
    { name: "Laravel", icon: <FaLaravel className="text-danger" />, level: "Advanced" },
    { name: "Python", icon: <FaPython className="text-warning" />, level: "Intermediate" },
    { name: "REST APIs", icon: <FaServer className="text-info" />, level: "Advanced" },

    // 🔹 Databases
    { name: "PostgreSQL", icon: <FaDatabase className="text-secondary" />, level: "Advanced" },
    { name: "MongoDB", icon: <SiMongodb className="text-success" />, level: "Intermediate" },
    { name: "MySQL", icon: <SiMysql className="text-primary" />, level: "Advanced" },

    // 🔹 Tools & DevOps
    { name: "Git", icon: <FaGitAlt className="text-danger" />, level: "Advanced" },
    { name: "GitHub", icon: <FaGithub className="text-dark" />, level: "Advanced" },
    { name: "NPM", icon: <FaNpm className="text-danger" />, level: "Advanced" },
    { name: "Postman", icon: <SiPostman className="text-warning" />, level: "Advanced" },
    { name: "Docker", icon: <FaDocker className="text-primary" />, level: "Advanced" },
    { name: "Vite", icon: <SiVite className="text-warning" />, level: "Intermediate" },
    { name: "Terminal / CLI", icon: <FaTerminal className="text-secondary" />, level: "Intermediate" },
    { name: "Figma", icon: <FaFigma className="text-danger" />, level: "Intermediate" },
  ];

  return (
  <section className="skills-section">
  <h2 className="skills-title gradient-text">{current.title}</h2>
  <div className="skills-grid">
    {skillsData.map((skill, index) => (
      <div key={index} className="skill-card">
        <div className="skill-icon">{skill.icon}</div>
        <h4>{skill.name}</h4>
        <p>{current.levels[skill.level]}</p>
      </div>
    ))}
  </div>
</section>

  );
};

export default Skills;
