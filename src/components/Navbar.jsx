import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h1>Brandon Castillo</h1>
      <ul>
        <Link to="/works">Works</Link>
        <Link to="/education">Education</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/aboutme">About</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
