import cv from "../assets/Brandon Castillo Resume.pdf"
import cv_logo from "../assets/cv.png"
import linkedin_logo from "../assets/linkedin.png"
import github_logo from "../assets/github-newColor.png"
import { Link } from "react-router-dom"
// import { useSelector } from "react-redux"
// import { useState } from "react"

function Home() {
  const [lang, setLang] = useState(useSelector(state => state.language.value));

  return (
    <main className="home">
      {console.log(lang)}
      <section id="hero">
        <h1>Brandon Castillo</h1>
        <h2>Front End Developer</h2>
        <figure className="profile-pic">
          <img
            src="https://res.cloudinary.com/daynclfo8/image/upload/w_600,f_webp,q_60/v1730995825/first-linkedin_1_zrrswp.png"
            alt="Brandon Castillo's profile picture"
          />
        </figure>
        <p className="profile-description">
          I build immersive, interactive, pixel-perfect digital experiences for the web.
        </p>
        <div className="home-icons">
          <a
            href="https://github.com/brandoncastillodev"
            title="Let's work!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-6 w-6" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
          </a>
          <a
            href="https://linkedin.com/in/brandoncastillodev"
            title="Let's connect!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
          </a>
         <a
            href={cv}
            title="Download CV"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6" aria-hidden="true">
  <path d="M6 2.25A2.25 2.25 0 003.75 4.5v15A2.25 2.25 0 006 21.75h12A2.25 2.25 0 0020.25 19.5v-15A2.25 2.25 0 0018 2.25H6zm3 5.25h6a.75.75 0 010 1.5H9a.75.75 0 010-1.5zm0 3h6a.75.75 0 010 1.5H9a.75.75 0 010-1.5zm0 3h4.5a.75.75 0 010 1.5H9a.75.75 0 010-1.5z"/>
</svg>
          </a> 
        </div>
      </section>

      <section id="about">
        <h3>ABOUT</h3>
        <p  className="about-body">
          Hello, my name is Brandon, and I'm an enthusiastic person about front-end and UX/UI design. 
          I live in Buenos Aires, Argentina.
          I like innovation and good ideas. 
          I have 1 year of experience.Please check my works <Link to="/work">here</Link>.
        </p>
      </section>

      <section className="technologies">
        <h3>Technologies I Use Daily</h3>
        <div className="tech-lists">
          <ul>
            <li>React</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5</li>
            <li>CSS3 / Sass</li>
            <li>Terminal (Scripts / Automation)</li>
            <li>GNU/Linux</li>
          </ul>
          <ul>
            <li>Npm / Node.js</li>
            <li>Git / GitHub</li>
            <li>GIMP (Image editing)</li>
            <li>LibreOffice (Office)</li>
            <li>ChatGPT (AI-assisted workflow)</li>
            <li>OBS Studio (Screen recording)</li>
          </ul>
        </div>
      </section>

      <section className="technologies">
        <h3>Technologies I Have Experience With</h3>
        <div className="tech-lists">
          <ul>
            <li>Figma</li>
            <li>Trello</li>
            <li>UXtweak</li>
            <li>Miro</li>
            <li>Redux</li>
            <li>Tailwind CSS</li>
          </ul>
          <ul>
            <li>Chakra UX</li>
            <li>MUI</li>      
            <li>Express.js</li>
            <li>Sequelize</li>
            <li>PostgreSQL</li>
            <li>SQLite3</li>
            
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
            <li>Pair Programming</li>
          </ul>
        </div>
      </section>

      <section id="technologies" className="charts">
        <h3>Charts</h3>
        <img
          style={{ marginTop: "0.5rem" }}
          src="http://ghchart.rshah.org/3fc761/brandoncastillodev"
          alt="brandoncastillodev's Github chart"
        />
      </section>
    </main>
  );
}

export default Home;
