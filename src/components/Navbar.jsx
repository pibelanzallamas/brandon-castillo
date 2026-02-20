import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setLang } from "../state/lang";

function Navbar() {
  const location = useLocation();
  const links = [
    { to: "/education", title: "Education" },
    { to: "/work", title: "Work" },
    // { to: "/projects", title: "Projects" },
    // { to: "/services", title: "Services" },
    { to: "/contact", title: "Contact" },
  ];

  const handleHambu = () => {
    setClicked(!clicked);
  };

  const [esp, setEsp] = useState(useSelector(state => state.lang.esp));
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setLang(esp))
  },[esp])

  return (
    <>
      {/* <nav id="Navbar" className="nav nav-mobile">
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
      </nav> */}
      {/* <ul className={clicked ? "hambu" : "notHambu"}>
        {links.length > 0 &&
          links.map((ele, i) => (
            <Link to={ele.to} onClick={() => setLink(ele.title)} key={i}>
              {link == ele.title ? <u>{ele.title}</u> : ele.title}
            </Link>
          ))}
      </ul> */}
      <nav className="nav-desktop">
        <Link
          className="home-button"
          to={"/"}
          onClick={() => {setLink("Home")}}
        >
          
        </Link>

        <div className="language">
          <p onClick={()=> setEsp(false)} className={!esp ? "clicked" : "not-clicked"}> EN </p>
          <p onClick={()=> setEsp(true)} className={esp ? "clicked" : "not-clicked"}> ES </p>
        </div>
        
        {/* <ul>
          {links.length > 0 &&
            links.map((ele, i) => (
              <Link to={ele.to} onClick={() => setLink(ele.title)} key={i}>
                {link == ele.title ? <u>{ele.title}</u> : ele.title}
              </Link>
            ))}
        </ul> */}
      </nav>
    </>
  );
}

export default Navbar;
