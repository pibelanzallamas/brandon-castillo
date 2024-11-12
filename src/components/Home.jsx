import React from "react";
import { useSelector } from "react-redux";
import cv from "../assets/cv2.svg";
import likedin from "../assets/linkedin.svg";
import github from "../assets/github2.svg";

function Home() {
  const lang = useSelector((state) => state.lang);

  console.log(lang);
  return (
    <main className="home">
      <section id="hero">
        <h2>Hello World 👋</h2>
        <h1>I'm Brandon Castillo a Full Stack Developer</h1>

        <figure className="profile-pic">
          <img
            src="https://res.cloudinary.com/daynclfo8/image/upload/v1730995825/first-linkedin_1_zrrswp.png"
            alt=""
          />
        </figure>
      </section>

      <section className="links">
        <a
          href="https://drive.google.com/file/d/1aWjYJvjbn3KkS_K5ZzTUhsnGN88RpvuE/view?usp=sharing"
          title="CV"
          target="_blank"
        >
          <figure>
            <img src={cv} alt="" />
          </figure>
        </a>
        <a
          href="https://github.com/pibelanzallamas"
          title="Github Page"
          target="_blank"
        >
          <figure>
            <img src={github} alt="" />
          </figure>
        </a>
        <a
          href="https://linkedin.com/in/brandon-castillo-dev"
          title="LinkedIn Page"
          target="_blank"
        >
          <figure>
            <img src={likedin} alt="" />
          </figure>
        </a>
      </section>

      <section id="about">
        <h3>About</h3>
        <p>
          Hello, my name is Brandon, and I'm an enthusiastic technology
          developer. I live and breathe code. I like innovation and good ideas.
          I believe that the best solutions are the simplest and easiest to
          implement. I study software development at my local (technical)
          university. I did a Full Stack Bootcamp where I embraced the
          globalized world. I believe we are living a new industrial revolution,
          and I believe it's pretty exciting for everyone.
        </p>
      </section>

      <section className="technologies">
        <h3>Technologies</h3>
        <div className="tech-lists">
          <ul>
            <li>Html5</li>
            <li>Css3</li>
            <li>Javascript</li>
            <li>Node</li>
            <li>Unix</li>
            <li>Sql</li>
          </ul>

          <ul>
            <li>Express</li>
            <li>Sequelize</li>
            <li>React</li>
            <li>Redux</li>
            <li>Sass</li>
            <li>Vite</li>
          </ul>
        </div>
      </section>

      <section className="soft-skills technologies">
        <h3>Soft skills</h3>
        <div className="tech-lists">
          {/* <p>Agile Methods - Scrum - Team Work - Pair Programming</p> */}
          <ul>
            <li>Agile Methods</li>
            <li>Scrum</li>
          </ul>

          <ul>
            <li>Team Work</li>
            <li>Pair Programming</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Home;
