import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const links = [
    { to: "/education", title: "Education" },
    { to: "/experience", title: "Experience" },
    { to: "/works", title: "Works" },
    { to: "/projects", title: "Projects" },
    { to: "/services", title: "Services" },
    { to: "/contact", title: "Contact" },
  ];
  const [clicked, setClicked] = useState(false);
  const [link, setLink] = useState("");

  const handleHambu = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    if (location.pathname == "/") {
      setLink("");
    }
  }, [location]);

  return (
    <>
      <nav id="Navbar" className="nav nav-mobile">
        <Link className="home-button" to={"/"}>
          Brandon Castillo
        </Link>
        <a onClick={() => handleHambu()} href="#">
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
            <Link to={ele.to} onClick={() => setLink(ele.title)} key={i}>
              {link == ele.title ? <u>{ele.title}</u> : ele.title}
            </Link>
          ))}
      </ul>
      <nav className="nav nav-desktop">
        <Link
          className="home-button"
          to={"/"}
          onClick={() => {
            setLink("Home");
          }}
        >
          Brandon Castillo
        </Link>
        <ul>
          {links.length > 0 &&
            links.map((ele, i) => (
              <Link to={ele.to} onClick={() => setLink(ele.title)} key={i}>
                {link == ele.title ? <u>{ele.title}</u> : ele.title}
              </Link>
            ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
