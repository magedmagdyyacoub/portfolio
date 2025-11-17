import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Container } from "react-bootstrap";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
import Skills from "../components/Skills";

import "../index.css";

const Home = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? "bg-dark text-light" : "bg-light text-dark"}>
      {/* Section 1: Hero */}
<section className="py-5 d-flex justify-content-center align-items-center">
  <Container>
    <Hero />
  </Container>
</section>

<section className="py-5 d-flex justify-content-center align-items-center">
  <Hero2 />
</section>
      {/* Section 2: Skills */}
      <section className="py-5">
        <Container>   
          <Skills />
        </Container>
      </section>
  

    </div>
  );
};

export default Home;
