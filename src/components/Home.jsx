import React from "react";
import cv from "../assets/cv2.svg";
import likedin from "../assets/linkedin.svg";
import github from "../assets/github2.svg";

function Home() {
  return (
    <main className="home">
      <section id="hero">
        <p className="presentation">Hi!👋 my name is</p>
        <h1>Brandon Castillo and I'm a Full Stack Developer</h1>

        <figure className="profile-pic">
          <img
            src="https://res.cloudinary.com/daynclfo8/image/upload/v1730995825/first-linkedin_1_zrrswp.png"
            alt=""
          />
        </figure>
      </section>

      <section id="home-icons">
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
            <li>Terminal (Unix)</li>
            <li>Visual Studio Code</li>
            <li>Git</li>
            <li>Github</li>
            <li>NodeJs</li>
            <li>Sass</li>
          </ul>
          <ul>
            <li>Html</li>
            <li>Css</li>
            <li>Javascript</li>
            <li>React</li>
            <li>React Router Dom</li>
            <li>Redux</li>
          </ul>
        </div>
      </section>

      <section className="technologies">
        <h3>Technologies I Have Experience With</h3>
        <div className="tech-lists">
          <ul>
            <li>Php</li>
            <li>Python</li>
            <li>PostgreSQL</li>
            <li>Sqlite3</li>
            <li>Figma</li>
            <li>Trello</li>
            <li>TypeScript</li>
            <li>Astro</li>
          </ul>
          <ul>
            <li>Express</li>
            <li>Sequelize</li>
            <li>JWT</li>
            <li>DotEnv</li>
            <li>Tailwind</li>
            <li>MUI</li>
            <li>Chakra Ux</li>
            <li>Bulma</li>
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
    </main>
  );
}

export default Home;
