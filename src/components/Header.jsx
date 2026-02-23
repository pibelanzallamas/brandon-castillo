import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cvEn from "../assets/cvs/Brandon Castillo Resume.pdf"
import cvEs from "../assets/cvs/Brandon Castillo.pdf"
import { Link} from "react-router-dom";
import { setLang } from "../state/lang";

function Main() {
  const [esp, setEsp] = useState(useSelector(state => state.lang.esp));
  const leng = useSelector(state => state.lang.esp);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setLang(esp))
  },[esp])

  return (
    <header>
      <nav>
        <Link
          className="home-button"
          to={"/"}
          onClick={() => {setLink("Home")}}
        ></Link>
        <div className="set-lang">
          <p onClick={()=> setEsp(false)} className={!esp ? "clicked" : "not-clicked"}> EN </p>
          <p onClick={()=> setEsp(true)} className={esp ? "clicked" : "not-clicked"}> ES </p>
        </div>
      </nav> 

      <div id="hero">
        <h1>Brandon Castillo</h1>
        <h2>{leng ? " Desarrollador Front End" : "Front End Developer"}</h2>
        <p className="hero-description">
          {leng ? "Construyo experiencias digitales inmersivas, interactivas y pixel-perfect para la web.":
          "I build immersive, interactive, pixel-perfect digital experiences for the web."}
        </p>

        <div className="hero-icons">
          <a
            href="https://github.com/brandoncastillodev"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="#B0A99F"
              class="h-6 w-6"
              aria-hidden="true">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">  </path></svg>
          </a>
          <a
            href="https://linkedin.com/in/brandoncastillodev"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#B0A99F"
                class="h-6 w-6"
                aria-hidden="true">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z">
              </path>
            </svg>
          </a>
         <a
            href={leng?cvEs:cvEn}
            title={leng?"Currículum":"Résumé"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#B0A99F"
                class="h-6 w-6"
                aria-hidden="true">
              <path d="M6 2.25A2.25 2.25 0 003.75 4.5v15A2.25 2.25 0 006 21.75h12A2.25 2.25 0 0020.25 19.5v-15A2.25 2.25 0 0018 2.25H6zm3 5.25h6a.75.75 0 010 1.5H9a.75.75 0 010-1.5zm0 3h6a.75.75 0 010 1.5H9a.75.75 0 010-1.5zm0 3h4.5a.75.75 0 010 1.5H9a.75.75 0 010-1.5z"/>
            </svg>
          </a> 
        </div>
      </div>
    </header>
  );
}

export default Main;


  // const location = useLocation();
  // const links = [
  //   { to: "/education", title: "Education" },
  //   { to: "/work", title: "Work" },
  //   { to: "/contact", title: "Contact" },
  // ];

  // const handleHambu = () => {
  //   setClicked(!clicked);
  // };

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


       {/* <ul>
          {links.length > 0 &&
            links.map((ele, i) => (
              <Link to={ele.to} onClick={() => setLink(ele.title)} key={i}>
                {link == ele.title ? <u>{ele.title}</u> : ele.title}
              </Link>
            ))}
        </ul> */}