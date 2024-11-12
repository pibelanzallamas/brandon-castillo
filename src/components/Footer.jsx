import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <Link to="/education">Education</Link>
      <Link to="/services">Services</Link>
      <Link to="/works">Works</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </footer>
  );
}

export default Footer;
