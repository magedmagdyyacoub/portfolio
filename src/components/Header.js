import React, { useContext } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import "../index.css";

const Header = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <Navbar
      expand="lg"
      className={`py-3 ${darkMode ? "navbar-dark bg-dark shadow-sm" : "navbar-light bg-light shadow-sm"}`}
    >
      <Container>
        {/* 🏷️ Portfolio Title */}
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 gradient-text">
          {language === "en" ? "Maged Portfolio" : "بورتفوليو ماجد"}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* 🔗 Navigation Links */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className={darkMode ? "text-light" : "text-dark"}>
              {language === "en" ? "Home" : "الرئيسية"}
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" className={darkMode ? "text-light" : "text-dark"}>
              {language === "en" ? "Projects" : "المشاريع"}
            </Nav.Link>
          </Nav>

          {/* 🌙 Toggle Buttons */}
          <div className="d-flex gap-2">
            <Button
              variant={darkMode ? "light" : "dark"}
              onClick={toggleTheme}
              className="fw-semibold"
            >
              {darkMode
                ? language === "en"
                  ? "Light ☀️"
                  : "الوضع الفاتح ☀️"
                : language === "en"
                ? "Dark 🌙"
                : "الوضع الداكن 🌙"}
            </Button>

            <Button
              variant="secondary"
              onClick={toggleLanguage}
              className="fw-semibold"
            >
              {language === "en" ? "العربية" : "English"}
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
