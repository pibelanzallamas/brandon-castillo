import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [link, setLink] = useState(-1);
  const links = [
    { to: "/works", title: "Works" },
    { to: "/education", title: "Education" },
    { to: "/projects", title: "Projects" },
    { to: "/aboutme", title: "About Me" },
  ];
  return (
    <nav>
      <h1>Brandon Castillo</h1>
      <ul>
        {links.length > 0 &&
          links.map((ele, i) => (
            <Link to={ele.to} onClick={() => setLink(i)} key={i}>
              {link == i ? <u>{ele.title}</u> : ele.title}
            </Link>
          ))}
      </ul>
    </nav>
  );
}

export default Navbar;
