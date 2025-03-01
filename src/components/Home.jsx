import React from "react";
import cv from "../assets/cv.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.png";

function Home() {
  return (
    <main className="home">
      <section id="hero">
        <h1 className="titles">Hi I'm Brandon Castillo 👋</h1>
        <h2>Full Stack Developer</h2>

        <figure className="profile-pic">
          <img
            src="https://res.cloudinary.com/daynclfo8/image/upload/v1730995825/first-linkedin_1_zrrswp.png"
            alt="Brandon Castillo's profile picture"
          />
        </figure>
        <div id="home-icons">
          <a
            href="https://drive.google.com/file/d/17QFNa-D39p_TwNwOyTISDT3r1s4g__ub/view?usp=sharing" //<-----CV
            title="Cv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure style={{ aspectRatio: " 1/1" }}>
              <img src={cv} alt="Download CV" />
            </figure>
          </a>

          <a
            href="https://linkedin.com/in/bran-castillo-dev"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure>
              <img src={linkedin} alt="LinkedIn profile" />
            </figure>
          </a>

          <a
            href="https://github.com/pibelanzallamas"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure>
              <img src={github} alt="GitHub profile" />
            </figure>
          </a>
        </div>
      </section>

      <section id="about">
        <h3>Who I Am and What I Do</h3>
        <p>
          Hello, my name is Brandon, and I'm an enthusiastic technology
          developer. I live and breathe code. I like innovation and good ideas.
          I believe that the best solutions are the simplest to implement. I
          study software engineer at my local university. I completed a Full
          Stack Bootcamp where I embraced the globalized world. I believe we are
          living a new industrial revolution, and I find it incredibly exciting
          for everyone.
          {/*I believe it's pretty exciting for everyr */}
        </p>
      </section>

      <section className="technologies">
        <h3>Technologies I Use Daily</h3>
        <div className="tech-lists">
          <ul>
            <li>GNU/Linux</li>
            <li>Unix</li>
            <li>Visual Studio Code</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Node.js</li>
          </ul>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML5</li>
            <li>Tailwind CSS</li>
            <li>Redux</li>
            <li>Axios</li>
          </ul>
        </div>
      </section>

      <section className="technologies">
        <h3>Technologies I Have Experience With</h3>
        <div className="tech-lists">
          <ul>
            <li>Python</li>
            <li>SQLite</li>
            <li>Express.js</li>
            <li>Sequelize</li>
            <li>JWT</li>
            <li>EmailJs</li>
          </ul>
          <ul>
            <li>Trello</li>
            <li>Figma</li>
            <li>MUI</li>
            <li>Chakra Ux</li>
            <li>Sass</li>
            <li>PostgreSQL</li>
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

      <section id="technologies" className="charts">
        <h3>Charts</h3>
        <img
          style={{ marginTop: "0.5rem" }}
          src="http://ghchart.rshah.org/3fc761/pibelanzallamas"
          alt="pibelanzallamas's Github chart"
        />
      </section>
    </main>
  );
}

export default Home;
