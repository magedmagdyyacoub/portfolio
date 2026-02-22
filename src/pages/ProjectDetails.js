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
{
  id: 4,
  title: "ShopHub Ecommerce Platform",
  description:
    "A sleek, responsive ecommerce site built with Next.js. Features product browsing, cart, and secure checkout.",
  gallery: [
    "/images/shophub/1.png",
    "/images/shophub/2.png",
    "/images/shophub/3.png",
    "/images/shophub/4.png",
    "/images/shophub/5.png",
    "/images/shophub/6.png",
    "/images/shophub/7.png",
    "/images/shophub/8.png"
  ],  
  github: "https://github.com/magedmagdyyacoub/shophub", // ← عدلها لو مختلف
  technologies: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Prisma ORM",
    "PostgreSQL",
    "NextAuth.js",
    "Stripe API"
  ],
  features: {
    dashboards: {
      "User Dashboard": [
        "Browse and search products",
        "Add to cart and checkout",
        "Track orders and history",
        "Manage profile and address",
      ],
      "Admin Dashboard": [
        "Add/edit/delete products",
        "Manage categories and inventory",
        "View sales analytics",
        "Control user roles and access",
      ]
    },
    otherFeatures: [
      "Authentication with NextAuth.js",
      "Integrated Stripe payments",
      "Responsive UI with Tailwind",
      "Dark/Light mode support",
      "SEO-friendly product pages",
    ],
  },
},
{
  id: 5,
  title: "Social Media App",
  description:
    "A modern social platform built with Next.js, enabling users to connect, share, and engage seamlessly.",
  gallery: [
    "/images/social/1.png",
    "/images/social/2.png",
    "/images/social/3.png",
    "/images/social/4.png",
    "/images/social/5.png",
    "/images/social/6.png",
    "/images/social/7.png",
    "/images/social/8.png",
    "/images/social/9.png",
    "/images/social/10.png"
  ],
  github: "https://github.com/magedmagdyyacoub/social", // ← عدلها لو مختلف
  technologies: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Prisma ORM",
    "PostgreSQL",
    "NextAuth.js",
    "Cloudinary API"
  ],
  features: {
    dashboards: {
      "User Dashboard": [
        "Add and manage friends",
        "Create and share posts",
        "Upload and browse reels",
        "Like and share content",
        "Comment and reply on posts",
        "Manage profile and settings"
      ],
      "Admin Dashboard": [
        "Manage users and roles",
        "Moderate posts, reels, and comments",
        "View engagement analytics",
        "Control platform settings"
      ]
    },
    otherFeatures: [
      "Authentication with NextAuth.js",
      "Responsive UI with Tailwind",
      "Dark/Light mode support",
      "Real-time notifications",
      "SEO-friendly user profiles and posts"
    ],
  },
},
{
  id: 6,
  title: "Egyptian Museum Website",
  description:
    "An elegant, informative platform showcasing Egypt’s ancient heritage through virtual exhibits and modern design.",
  gallery: [
    "/images/museum/1.png",
    "/images/museum/2.png",
    "/images/museum/3.png",
    "/images/museum/4.png",
    "/images/museum/5.png",
    "/images/museum/6.png",
    "/images/museum/7.png"
  ],
  github: "https://github.com/magedmagdyyacoub/egyptianmuseum", // ← عدلها لو مختلف
  technologies: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Prisma ORM",
    "PostgreSQL",
    "NextAuth.js",
    "Cloudinary API"
  ],
  features: {
    dashboards: {
      "Visitor Dashboard": [
        "Explore virtual galleries of ancient artifacts",
        "Read detailed descriptions and historical context",
        "Bookmark favorite exhibits",
        "Search by era, dynasty, or artifact type",
        "Toggle dark/light mode for accessibility"
      ],
      "Admin Dashboard": [
        "Add/edit/delete artifact entries",
        "Manage exhibit categories and metadata",
        "Upload high-resolution images via Cloudinary",
        "Control user access and roles",
        "View visitor engagement analytics"
      ]
    },
    otherFeatures: [
      "Authentication with NextAuth.js",
      "Responsive UI with Tailwind",
      "Multilingual support (Arabic/English)",
      "SEO-optimized exhibit pages",
      "Smooth animations and transitions",
      "Secure backend with Prisma and PostgreSQL"
    ],
  },
},
{
  id: 7,
  title: "Food Blog Website",
  description:
    "A vibrant, recipe-rich platform where admins share delicious meals and users engage through comments.",
  gallery: [
    "/images/foodblog/1.png",
    "/images/foodblog/2.png",
    "/images/foodblog/3.png",
    "/images/foodblog/4.png",
    "/images/foodblog/5.png",
    "/images/foodblog/6.png",
    "/images/foodblog/7.png",
    "/images/foodblog/8.png",
    "/images/foodblog/9.png",
    "/images/foodblog/10.png",
    "/images/foodblog/11.png"
  ],
  github: "https://github.com/magedmagdyyacoub/foodblog", // ← عدلها لو مختلف
  technologies: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Prisma ORM",
    "PostgreSQL",
    "NextAuth.js",
    "Cloudinary API"
  ],
  features: {
    dashboards: {
      "User Dashboard": [
        "Browse and search recipes by category",
        "Comment and rate recipes",
        "Bookmark favorite dishes",
        "Manage profile and preferences",
        "Toggle dark/light mode"
      ],
      "Admin Dashboard": [
        "Add/edit/delete recipes with images",
        "Organize recipes by cuisine and type",
        "Moderate user comments",
        "View recipe engagement analytics",
        "Manage user roles and access"
      ]
    },
    otherFeatures: [
      "Authentication with NextAuth.js",
      "Responsive UI with Tailwind",
      "SEO-optimized recipe pages",
      "Cloudinary-powered image uploads",
      "Multilingual support (Arabic/English)",
      "Smooth animations and transitions"
    ],
  },
},
{
  id: 8,
  title: "Shop Website",
  description:
    "A sleek ecommerce platform for browsing products, managing carts, and completing secure checkouts.",
  gallery: [
    "/images/shop/1.png",
    "/images/shop/2.png",
    "/images/shop/3.png",
    "/images/shop/4.png",
    "/images/shop/5.png",
    "/images/shop/6.png",
    "/images/shop/7.png",
    "/images/shop/8.png",
    "/images/shop/9.png",
    "/images/shop/10.png",
    "/images/shop/11.png",
    "/images/shop/12.png",
  ],
  github: "https://github.com/magedmagdyyacoub/shopwebsite", // ← عدلها لو مختلف
  technologies: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Prisma ORM",
    "PostgreSQL",
    "NextAuth.js",
    "Stripe API"
  ],
  features: {
    dashboards: {
      "User Dashboard": [
        "Browse and search products",
        "Add items to cart and wishlist",
        "Apply coupons and checkout securely",
        "Track orders and manage profile",
        "Toggle dark/light mode"
      ],
      "Admin Dashboard": [
        "Add/edit/delete products and categories",
        "Manage inventory and pricing",
        "View sales and user analytics",
        "Control user roles and access"
      ]
    },
    otherFeatures: [
      "Authentication with NextAuth.js",
      "Stripe-integrated payment system",
      "Responsive design with Tailwind",
      "SEO-optimized product pages",
      "Cloudinary-powered image uploads",
      "Smooth animations and transitions"
    ],
  },
},
{
  id: 9,
  title: "HealthHub Website",
  description:
    "A comprehensive healthcare platform connecting patients and doctors with scheduling, dashboards, and wellness tools.",
  gallery: [
    "/images/healthhub/1.png",
    "/images/healthhub/2.png",
    "/images/healthhub/3.png",
    "/images/healthhub/4.png",
    "/images/healthhub/5.png",
    "/images/healthhub/6.png",
    "/images/healthhub/7.png"
  ],
  github: "https://github.com/magedmagdyyacoub/healthhub", // ← عدلها لو مختلف
  technologies: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Prisma ORM",
    "PostgreSQL",
    "NextAuth.js",
    "Cloudinary API"
  ],
  features: {
    dashboards: {
      "Patient Dashboard": [
        "Book appointments with doctors",
        "View medical history and prescriptions",
        "Track wellness metrics and progress",
        "Receive health tips and notifications",
        "Manage profile and insurance details"
      ],
      "Doctor Dashboard": [
        "Manage appointment schedule",
        "Access patient records and history",
        "Write and update prescriptions",
        "Communicate with patients securely",
        "View analytics on patient engagement"
      ],
      "Admin Dashboard": [
        "Add/edit/delete doctor profiles",
        "Manage departments and specialties",
        "Monitor system usage and analytics",
        "Control user roles and access",
        "Moderate health content and tips"
      ]
    },
    otherFeatures: [
      "Authentication with NextAuth.js",
      "Responsive UI with Tailwind",
      "Multilingual support (Arabic/English)",
      "Cloudinary-powered image uploads",
      "SEO-optimized health articles",
      "Smooth animations and transitions"
    ],
  },
},
{
  id: 10,
  title: "EcomEase Website",
  description:
    "A modern ecommerce platform offering a seamless shopping experience with product browsing, cart management, and secure checkout.",
  gallery: [
    "/images/ecomease/1.png",
    "/images/ecomease/2.png",
    "/images/ecomease/3.png",
    "/images/ecomease/4.png",
    "/images/ecomease/5.png",
    "/images/ecomease/6.png"
  ],
  github: "https://github.com/magedmagdyyacoub/ecomease", // ← عدلها لو مختلف
  technologies: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "MongoDB",
    "Stripe API",
    "NextAuth.js",
    "Cloudinary API"
  ],
  features: {
    dashboards: {
      "Customer Dashboard": [
        "Browse and filter products by category",
        "Add items to cart and wishlist",
        "Secure checkout with Stripe integration",
        "Track orders and delivery status",
        "Manage profile and shipping addresses"
      ],
      "Seller Dashboard": [
        "Add/edit/delete product listings",
        "Upload product images via Cloudinary",
        "View sales analytics and inventory",
        "Manage orders and customer messages",
        "Set promotional offers and discounts"
      ],
      "Admin Dashboard": [
        "Moderate product listings and reviews",
        "Manage user roles and permissions",
        "Monitor platform performance and usage",
        "Control featured products and banners",
        "Oversee payment and refund operations"
      ]
    },
    otherFeatures: [
      "Authentication with NextAuth.js",
      "Responsive UI with Tailwind",
      "Multilingual support (Arabic/English)",
      "Cloudinary-powered image uploads",
      "SEO-optimized product pages",
      "Smooth animations and transitions"
    ],
  },
},
{
  id: 11,
  title: "JobSearch Website",
  description:
    "A professional job search platform designed to help users discover opportunities, explore company insights, and apply seamlessly through a responsive interface.",
  gallery: [
    "/images/jobquest/1.png",
    "/images/jobquest/2.png",
    "/images/jobquest/3.png",
    "/images/jobquest/4.png",
    "/images/jobquest/5.png",
    "/images/jobquest/6.png",
    "/images/jobquest/7.png",
    "/images/jobquest/8.png",
    "/images/jobquest/9.png",
    "/images/jobquest/10.png",
    "/images/jobquest/11.png",
    "/images/jobquest/12.png"
  ],
  github: "https://github.com/magedmagdyyacoub/jobquest", // ← عدلها لو مختلف
  technologies: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "MongoDB",
    "NextAuth.js",
    "Cloudinary API",
    "Algolia Search"
  ],
  features: {
    dashboards: {
      "Job Seeker Dashboard": [
        "Search and filter jobs by title, location, and category",
        "Save jobs to wishlist and track applications",
        "View company reviews and ratings",
        "Manage profile, resume, and cover letters",
        "Receive job alerts and recommendations"
      ],
      "Employer Dashboard": [
        "Post and manage job listings",
        "Review candidate applications and profiles",
        "Communicate with applicants securely",
        "Access analytics on job views and applications",
        "Edit company profile and branding assets"
      ],
      "Admin Dashboard": [
        "Moderate job listings and user reviews",
        "Manage user roles and permissions",
        "Monitor platform usage and performance",
        "Control featured jobs and homepage banners",
        "Oversee content quality and reporting tools"
      ]
    },
    otherFeatures: [
      "Authentication with NextAuth.js",
      "Responsive UI with Tailwind",
      "Multilingual support (Arabic/English)",
      "Cloudinary-powered image uploads",
      "SEO-optimized job listings",
      "Fast search powered by Algolia",
      "Smooth animations and transitions"
    ],
  },
},
{
  id: 12,
  title: "Mart Website",
  description:
    "A colorful and user-friendly ecommerce platform tailored for everyday shopping, featuring vibrant branding, intuitive product browsing, and secure checkout.",
  gallery: [
    "/images/mart/1.png",
    "/images/mart/2.png",
    "/images/mart/3.png",
    "/images/mart/4.png",
    "/images/mart/5.png",
    "/images/mart/6.png",
    "/images/mart/7.png",
    "/images/mart/8.png",
    "/images/mart/9.png",
    "/images/mart/10.png",
    "/images/mart/11.png"
  ],
  github: "https://github.com/magedmagdyyacoub/mart", // ← عدلها لو مختلف
  technologies: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "MongoDB",
    "Stripe API",
    "NextAuth.js",
    "Cloudinary API"
  ],
  features: {
    dashboards: {
      "Customer Dashboard": [
        "Browse and filter products by category",
        "Add items to cart and wishlist",
        "Secure checkout with Stripe integration",
        "Track orders and delivery status",
        "Manage profile and shipping addresses"
      ],
      "Seller Dashboard": [
        "Add/edit/delete product listings",
        "Upload product images via Cloudinary",
        "View sales analytics and inventory",
        "Manage orders and customer messages",
        "Set promotional offers and discounts"
      ],
      "Admin Dashboard": [
        "Moderate product listings and reviews",
        "Manage user roles and permissions",
        "Monitor platform performance and usage",
        "Control featured products and homepage banners",
        "Oversee payment and refund operations"
      ]
    },
    otherFeatures: [
      "Authentication with NextAuth.js",
      "Responsive UI with Tailwind",
      "Multilingual support (Arabic/English)",
      "Cloudinary-powered image uploads",
      "SEO-optimized product pages",
      "Smooth animations and transitions"
    ],
  },
},
{
  id: 13,
  title: "ToDo App",
  description:
    "A lightweight productivity app designed to help users organize daily tasks, track progress, and stay focused through a clean and responsive interface.",
  gallery: [
    "/images/todo/1.png",
    "/images/todo/2.png",
    "/images/todo/3.png",
    "/images/todo/4.png"
  ],
  github: "https://github.com/magedmagdyyacoub/todo", // ← عدلها لو مختلف
  technologies: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "MongoDB",
    "NextAuth.js",
    "Cloudinary API"
  ],
  features: {
    dashboards: {
      "User Dashboard": [
        "Add, edit, and delete tasks",
        "Mark tasks as complete or pending",
        "Organize tasks by category or priority",
        "View daily, weekly, and monthly task summaries",
        "Customize task views and filters"
      ],
      "Admin Dashboard": [
        "Manage user accounts and roles",
        "Monitor app usage and performance",
        "Control featured productivity tips",
        "Moderate shared task templates",
        "Oversee system settings and backups"
      ]
    },
    otherFeatures: [
      "Authentication with NextAuth.js",
      "Responsive UI with Tailwind",
      "Multilingual support (Arabic/English)",
      "Cloudinary-powered image uploads",
      "SEO-optimized task pages",
      "Smooth animations and transitions"
    ],
  },
},
{
  id: 14,
  title: "Online Store Website",
  description:
    "A stylish and responsive ecommerce platform offering a curated selection of fashion and lifestyle products, with intuitive navigation and secure checkout.",
  gallery: [
    "/images/onlinestore/1.png",
    "/images/onlinestore/2.png",
    "/images/onlinestore/3.png",
    "/images/onlinestore/4.png",
    "/images/onlinestore/5.png",
    "/images/onlinestore/6.png",
    "/images/onlinestore/7.png",
    "/images/onlinestore/8.png",
    "/images/onlinestore/9.png",
    "/images/onlinestore/10.png",
    "/images/onlinestore/11.png",
    "/images/onlinestore/12.png",
    "/images/onlinestore/13.png",
    "/images/onlinestore/14.png"
  ],
  github: "https://github.com/magedmagdyyacoub/onlinestore", // ← عدلها لو مختلف
  technologies: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "MongoDB",
    "Stripe API",
    "NextAuth.js",
    "Cloudinary API"
  ],
  features: {
    dashboards: {
      "Customer Dashboard": [
        "Browse and filter products by category",
        "Add items to cart and wishlist",
        "Secure checkout with Stripe integration",
        "Track orders and delivery status",
        "Manage profile and shipping addresses"
      ],
      "Seller Dashboard": [
        "Add/edit/delete product listings",
        "Upload product images via Cloudinary",
        "View sales analytics and inventory",
        "Manage orders and customer messages",
        "Set promotional offers and discounts"
      ],
      "Admin Dashboard": [
        "Moderate product listings and reviews",
        "Manage user roles and permissions",
        "Monitor platform performance and usage",
        "Control featured products and homepage banners",
        "Oversee payment and refund operations"
      ]
    },
    otherFeatures: [
      "Authentication with NextAuth.js",
      "Responsive UI with Tailwind",
      "Multilingual support (Arabic/English)",
      "Cloudinary-powered image uploads",
      "SEO-optimized product pages",
      "Smooth animations and transitions"
    ],
  },
},
{
  id: 15,
  title: "PM Tool Website",
  description:
    "A vibrant project management platform built for teams to collaborate, track tasks, and manage schedules with colorful dashboards and intuitive controls.",
  gallery: [
    "/images/pmtool/1.png",
    "/images/pmtool/2.png",
    "/images/pmtool/3.png",
    "/images/pmtool/4.png",
    "/images/pmtool/5.png",
    "/images/pmtool/6.png",
    "/images/pmtool/7.png",
    "/images/pmtool/8.png",
    "/images/pmtool/9.png",
    "/images/pmtool/10.png",
    "/images/pmtool/11.png",
    "/images/pmtool/12.png",
    "/images/pmtool/13.png",
    "/images/pmtool/14.png",
    "/images/pmtool/15.png",
    "/images/pmtool/16.png",
    "/images/pmtool/17.png",
    "/images/pmtool/18.png",
    "/images/pmtool/19.png"
  ],
  github: "https://github.com/magedmagdyyacoub/pmtool", // ← عدلها لو مختلف
  technologies: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "MongoDB",
    "NextAuth.js",
    "Cloudinary API",
    "Socket.IO"
  ],
  features: {
    dashboards: {
      "Team Member Dashboard": [
        "View assigned tasks and deadlines",
        "Update task status and progress",
        "Collaborate with teammates via comments",
        "Access shared files and resources",
        "Track personal productivity metrics"
      ],
      "Tenant Dashboard": [
        "Create and manage multiple projects",
        "Assign tasks to team members",
        "Set priorities and timelines",
        "Monitor overall project health",
        "Customize workspace branding"
      ],
      "Admin Dashboard": [
        "Manage tenants and user roles",
        "Monitor system usage and performance",
        "Control feature access and permissions",
        "Moderate shared content and templates",
        "Oversee platform settings and backups"
      ]
    },
    otherFeatures: [
      "Authentication with NextAuth.js",
      "Real-time updates with Socket.IO",
      "Responsive UI with Tailwind",
      "Multilingual support (Arabic/English)",
      "Cloudinary-powered file uploads",
      "SEO-optimized project pages",
      "Smooth animations and transitions"
    ],
  },
},
{
  id: 16,
  title: "Portfolio Website",
  description:
    "A sleek, static portfolio site showcasing personal projects, skills, and contact information with a responsive layout and bilingual content support.",
  gallery: [
    "/images/portfolio/1.png",
    "/images/portfolio/2.png"
  ],
  github: "https://github.com/magedmagdyyacoub/portfolio", // ← عدلها لو مختلف
  technologies: [
    "Next.js",
    "React",
    "Tailwind CSS"
  ],
  features: {
    dashboards: {
      "Visitor View": [
        "Browse featured projects with gallery previews",
        "Read bilingual About section (Arabic/English)",
        "Access contact form and social links",
        "View skills and tech stack",
        "Explore project details with clean layout"
      ],
      "Admin View (Static)": [
        "Edit content via code (no CMS)",
        "Update project entries and images manually",
        "Customize layout and branding",
        "Deploy easily to Vercel or Netlify"
      ]
    },
    otherFeatures: [
      "Responsive design with Tailwind CSS",
      "Static content without database",
      "SEO-friendly structure",
      "Fast loading and optimized assets",
      "Bilingual support (Arabic/English)",
      "Clean animations and transitions"
    ],
  },
}













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
    {/* ✅ Live Preview OR Gallery Section */}
{project.liveUrl ? (
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
) : project.gallery && (
  <div className="mt-5">
    <h5>Gallery:</h5>
    <div className="row">
      {project.gallery.map((photo, index) => (
        <div key={index} className="col-md-4 mb-3">
          <img
            src={photo}
            alt={`${project.title} screenshot ${index + 1}`}
            className="img-fluid rounded shadow-sm"
          />
        </div>
      ))}
    </div>
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
