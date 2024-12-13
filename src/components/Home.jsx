import React from "react";
import cv from "../assets/cv.svg";
import likedin from "../assets/linkedin.svg";
import github from "../assets/github.png";

function Home() {
  return (
    <main className="home">
      <section id="hero">
        <h1>Hi I'm Brandon Castillo 👋</h1>
        <h2>Full Stack Developer</h2>

        <figure className="profile-pic">
          <img
            src="https://res.cloudinary.com/daynclfo8/image/upload/v1730995825/first-linkedin_1_zrrswp.png"
            alt=""
          />
        </figure>
      </section>

      <section id="home-icons">
        <a
          href="https://drive.google.com/file/d/1wxjiIyHuavAX_5NnijhlnbfzkmKhXUAJ/view"
          title="CV"
          target="_blank"
        >
          <figure style={{ aspectRatio: " 1/1" }}>
            <img src={cv} alt="" />
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

        <a
          href="https://github.com/pibelanzallamas"
          title="Github Page"
          target="_blank"
        >
          <figure>
            <img src={github} alt="" />
          </figure>
        </a>
      </section>

      <section id="about">
        <h3>Who I Am and What I Do</h3>
        <p>
          Hello, my name is Brandon, and I'm an enthusiastic technology
          developer. I live and breathe code. I like innovation and good ideas.
          I believe that the best solutions are the simplest {/*and easiest */}{" "}
          to implement. I study software development at my local{" "}
          {/* (technical) */}
          university. I did a Full Stack Bootcamp where I embraced the
          globalized world. I believe we are living a new industrial revolution,
          and I believe it's pretty exciting for everyone.
        </p>
      </section>

      <section className="technologies">
        <h3>Technologies I Use Daily</h3>
        <div className="tech-lists">
          <ul>
            <li>Linux</li>
            <li>Terminal</li>
            <li>Visual Studio Code</li>
            <li>Git</li>
            <li>Github</li>
            <li>NodeJs</li>
          </ul>
          <ul>
            <li>ReactJs</li>
            <li>VainillaJs</li>
            <li>Html5</li>
            <li>Sass</li>
            <li>Redux</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
      </section>

      <section className="technologies">
        <h3>Technologies I Have Experience With</h3>
        <div className="tech-lists">
          <ul>
            <li>Python</li>
            <li>Sqlite3</li>
            <li>Express</li>
            <li>Sequelize</li>
            <li>Jwt</li>
            <li>EmailJs</li>
          </ul>
          <ul>
            <li>Trello</li>
            <li>Figma</li>
            <li>MUI</li>
            <li>Tailwind</li>
            <li>Chakra Ux</li>
            <li>Axios</li>
          </ul>
        </div>
      </section>

      <section id="soft-skills">
        <h3>Core Professional Skills</h3>
        <div className="tech-lists">
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

      <section id="technologies">
        <h3>Charts</h3>
        <img
          src="http://ghchart.rshah.org/3fc761/pibelanzallamas"
          alt="pibelanzallamas's Github chart"
        />
      </section>
    </main>
  );
}

export default Home;
