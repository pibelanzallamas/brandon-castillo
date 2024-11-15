import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <h3>Commits</h3>
      <div className="links final-links">
        <Link to="/education">Education</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/works">Works</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </footer>
  );
}

export default Footer;
