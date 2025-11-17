import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/projects.css";

const allProjects = [
  {
    id: 1,
    title: "E-Shopper Platform",
    description:
      "A full multi-role e-commerce platform with dashboards for SuperAdmin, Admin, Rider, Customer Service, and Users. Includes full CRUD operations, authentication, and real-time order management.",
    liveUrl: "https://eshopper2.vercel.app/",
    github: "https://github.com/magedmagdyyacoub/Eshopper2",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Passport.js (OAuth)",
      "Bootstrap",
    ],
    features: {
      dashboards: {
        "Super Admin": [
          "Manage all admins, riders, and customer service accounts",
          "View total revenue, orders, and performance analytics",
          "Approve or remove store managers",
          "Full system settings control",
        ],
        "Admin Dashboard": [
          "Add/Edit/Delete categories and products",
          "Manage coupons, offers, and discounts",
          "View and manage customer orders",
          "Access sales and inventory reports",
        ],
        "Rider Dashboard": [
          "View assigned deliveries",
          "Update delivery status (Picked up, Delivered, Failed)",
          "Real-time notifications for new orders",
        ],
        "Customer Service Dashboard": [
          "Access customer messages and complaints",
          "Track order issues and respond to users",
          "Communicate with riders and admins for escalation",
        ],
        "User Dashboard": [
          "Browse and search products by category",
          "Add products to cart, apply coupons, and checkout",
          "View order history and status updates",
          "Edit profile and manage saved addresses",
        ],
      },
      otherFeatures: [
        "OAuth Authentication (Google & Facebook Login)",
        "Payment Integration (Stripe/Instapay Ready)",
        "Product & Category CRUD operations",
        "Coupon Management System",
        "Order Tracking & Notification System",
        "Responsive UI for all devices",
        "Dark/Light Mode Support",
      ],
    },
  },
  {
    id: 2,
    title: "Booking System",
    description:
      "Booking system Through all over Big places in Egypt.Includes dark mode and light mode, responsive design, and animated transitions , Admin dashboard to manage bookings and users.",
    liveUrl: "https://bookingsystem-khaki.vercel.app",
    github: "https://github.com/magedmagdyyacoub/bookingsystem",
    technologies: ["React", "Bootstrap", "Framer Motion"],
    features: {
      dashboards: {
        "Public View": [
          "The public-facing interface of the Booking System offers a seamless and visually engaging experience for users exploring major venues across Egypt. Designed with responsiveness and animation in mind, it ensures accessibility and elegance across all devices.",
          "Certificates and professional achievements section",
          "Contact form with email integration",
          "Responsive design for all devices",
          "Animated transitions using Framer Motion",
        ],
      },
      otherFeatures: [
        "Dark/Light Mode toggle",
        "SEO-friendly metadata",
        "Smooth scrolling navigation",
        "Animated Transitions between sections",
        "Fast page loading using React lazy loading",
      ],
    },
  },
  {
    id: 3,
    title: "TMNT-Blog Platform",
    description:
      "A complete blog system with authentication, role-based access, and CRUD features for posts and comments.",
    liveUrl: "https://tmnt-rc7k.vercel.app",
    github: "https://github.com/magedmagdyyacoub/TMNT-BLOG",
    technologies: ["Node.js", "Express", "PostgreSQL", "EJS", "Passport.js"],
    features: {
      dashboards: {
        "Admin Dashboard": [
          "Approve or delete posts and comments",
          "Manage registered users",
          "Full control over categories and tags",
        ],
        "Author Dashboard": [
          "Create, edit, and delete blog posts",
          "Add images and tags to posts",
          "View post engagement analytics",
        ],
        "User Dashboard": [
          "Register and log in using OAuth or email",
          "Comment and like posts",
          "Follow favorite authors",
        ],
      },
      otherFeatures: [
        "OAuth login (Google, GitHub)",
        "Rich text editor for post creation",
        "Comment moderation system",
        "Responsive design for mobile and desktop",
        "Dark/Light Mode Support",
      ],
    },
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const { darkMode } = useContext(ThemeContext);
  const project = allProjects.find((p) => p.id === Number(id));

  if (!project)
    return <h2 className="text-center mt-5">Project not found</h2>;

  return (
    <div
      className={`project-details container py-5 ${
        darkMode ? "text-light bg-dark" : "text-dark bg-light"
      }`}
    >
      <Link
        to="/projects"
        className={`btn ${
          darkMode ? "btn-outline-light" : "btn-outline-primary"
        } mb-4`}
      >
        ← Back to Projects
      </Link>

      <h2 className="gradient-text mb-4">{project.title}</h2>
      <p className="lead">{project.description}</p>

      <h5 className="mt-4">Technologies:</h5>
      <ul>
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>

      {project.features && (
        <div className="mt-5">
          <h4>Dashboards & Features:</h4>
          {Object.entries(project.features.dashboards).map(
            ([role, features], i) => (
              <div key={i} className="mt-3">
                <h5>{role}</h5>
                <ul>
                  {features.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            )
          )}

          <h5 className="mt-4">Other Features:</h5>
          <ul>
            {project.features.otherFeatures.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* ✅ Live Preview Section */}
      {project.liveUrl && (
        <div className="mt-5">
          <h5>Live Preview:</h5>
          <iframe
            src={project.liveUrl}
            title={project.title}
            style={{
              width: "100%",
              height: "500px",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
          ></iframe>
        </div>
      )}

      <div className="mt-4">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn ${darkMode ? "btn-light" : "btn-primary"} me-3`}
        >
          View Live
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn ${darkMode ? "btn-outline-light" : "btn-dark"}`}
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
