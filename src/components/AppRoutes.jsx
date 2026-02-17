import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Education from "./Education";
import Experience from "./Experience";
import Works from "./Works";
import Projects from "./Projects";
import Services from "./Services";
import Contact from "./Contact";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="education" element={<Education />} />
      <Route path="experience" element={<Experience />} />
      <Route path="work" element={<Works />} />
      <Route path="projects" element={<Projects />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;
