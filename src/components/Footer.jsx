import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const [link, setLink] = useState("");

  const links = [
    { to: "/education", title: "Education" },
    { to: "/experience", title: "Experience" },
    { to: "/works", title: "Works" },
    { to: "/projects", title: "Projects" },
    { to: "/services", title: "Services" },
    { to: "/contact", title: "Contact" },
  ];

  useEffect(() => {
    if (location.pathname === "/") {
      setLink("");
    }

    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <footer>
      <h3>More About</h3>
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
