import React, { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const links = [
    { to: "/education", title: "Education" },
    { to: "/experience", title: "Experience" },
    { to: "/works", title: "Works" },
    { to: "/projects", title: "Projects" },
    { to: "/services", title: "Services" },
    { to: "/contact", title: "Contact" },
  ];
  const [link, setLink] = useState("");
  return (
    <footer>
      <h3>Menu</h3>
      <div className="footer-links">
        {links.length > 0 &&
          links.map((ele, i) => (
            <Link to={ele.to} onClick={() => setLink(ele.title)} key={i}>
              {link == ele.title ? <u>{ele.title}</u> : ele.title}
            </Link>
          ))}
      </div>
    </footer>
  );
}

export default Footer;
