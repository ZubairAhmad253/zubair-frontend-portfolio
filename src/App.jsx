import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Experience from "./pages/Experience.jsx";
import Skills from "./pages/Skills.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        {" "}
        {/* to offset fixed navbar height */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
