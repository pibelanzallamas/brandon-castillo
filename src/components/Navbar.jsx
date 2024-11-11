import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [link, setLink] = useState(-1);
  const links = [
    { to: "/works", title: "Works" },
    { to: "/education", title: "Education" },
    { to: "/projects", title: "Projects" },
    { to: "/aboutme", title: "About Me" },
    { to: "/services", title: "Services" },
  ];

  const [hambu, setHambu] = useState(false);

  const handleHambu = () => {
    setHambu(!hambu);
  };

  return (
    <>
      <nav className="nav nav-desktop">
        <h1>
          <Link to={"/"}>Brandon Castillo</Link>
        </h1>
        <ul>
          {links.length > 0 &&
            links.map((ele, i) => (
              <Link to={ele.to} onClick={() => setLink(i)} key={i}>
                {link == i ? <u>{ele.title}</u> : ele.title}
              </Link>
            ))}
        </ul>
      </nav>
      <nav className="nav nav-mobile">
        <h1>
          <Link to={"/"}>Brandon Castillo</Link>
        </h1>
        <a onClick={handleHambu}>
          <figure>
            <img
              src={
                !hambu
                  ? "https://res.cloudinary.com/daynclfo8/image/upload/v1731162233/menu_h06lbd.svg"
                  : "https://res.cloudinary.com/daynclfo8/image/upload/v1731163324/x_lqjkvf.svg"
              }
              alt="hamburger-icon"
            ></img>
          </figure>
        </a>
      </nav>
      <div className={hambu ? "hambu off" : "notHambu"}>
        <ul>
          {links.length > 0 &&
            links.map((ele, i) => (
              <Link to={ele.to} onClick={() => setLink(i)} key={i}>
                {link == i ? <u>{ele.title}</u> : ele.title}
              </Link>
            ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
