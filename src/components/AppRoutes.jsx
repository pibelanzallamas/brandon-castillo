import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Education from "./Education";
import Services from "./Services";
import Works from "./Works";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="education" element={<Education />} />
      <Route path="services" element={<Services />} />
      <Route path="works" element={<Works />} />
      <Route path="experience" element={<Experience />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;
