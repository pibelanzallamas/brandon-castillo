import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Works from "./Works";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="works" element={<Works />} />
      <Route path="education" element={<Education />} />
      <Route path="projects" element={<Projects />} />
      <Route path="experience" element={<Experience />} />
      <Route path="aboutme" element={<AboutMe />} />
    </Routes>
  );
}

export default AppRoutes;
