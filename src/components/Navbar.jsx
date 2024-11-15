import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const links = [
    { to: "/education", title: "Education" },
    { to: "/experience", title: "Experience" },
    { to: "/works", title: "Works" },
    { to: "/projects", title: "Projects" },
    { to: "/services", title: "Services" },
    { to: "/contact", title: "Contact" },
  ];
  const [link, setLink] = useState(-1);
  const [clicked, setClicked] = useState(false);

  const handleHambu = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <nav className="nav nav-mobile">
        <h1>
          <Link to={"/"}>Brandon Castillo</Link>
        </h1>
        <a onClick={handleHambu} href="#">
          <figure>
            <img
              src={
                clicked
                  ? "https://res.cloudinary.com/daynclfo8/image/upload/v1731163324/x_lqjkvf.svg"
                  : "https://res.cloudinary.com/daynclfo8/image/upload/v1731162233/menu_h06lbd.svg"
              }
              alt="hamburger-icon"
            ></img>
          </figure>
        </a>
      </nav>
      <ul className={clicked ? "hambu" : "notHambu"}>
        {links.length > 0 &&
          links.map((ele, i) => (
            <Link to={ele.to} onClick={() => setLink(i)} key={i}>
              {link == i ? <u>{ele.title}</u> : ele.title}
            </Link>
          ))}
      </ul>
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
    </>
  );
}

export default Navbar;
