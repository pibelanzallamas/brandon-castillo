import cv from "../assets/Brandon Castillo Resume.pdf"
import cv_logo from "../assets/cv.png"
import linkedin_logo from "../assets/linkedin.png"
import github_logo from "../assets/github-newColor.png"
import { Link } from "react-router-dom"

function Home() {
  return (
    <main className="home">
      <section id="hero">
        <h1 className="titles highlight"> <a href="https://linkedin.com/in/brandoncastillodev" target="_blank">Hi I'm Brandon Castillo 👋</a></h1>
        
        <h2 className="titles highlight"> 
          <a href="https://api.constata.eu/certificate/research+riding+veal+bonfire+dedicator" target="_blank">
          Front End & UX Designer
          </a>
        </h2>

        <figure className="profile-pic">
          <img
            src="https://res.cloudinary.com/daynclfo8/image/upload/w_600,f_webp,q_60/v1730995825/first-linkedin_1_zrrswp.png"
            alt="Brandon Castillo's profile picture"
          />
        </figure>

        <div id="home-icons">
          <a
            href={cv}
            title="Download CV"
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure style={{ aspectRatio: " 1/1" }}>
              <img src={cv_logo} alt="CV Logo" />
            </figure>
          </a>

          <a
            href="https://linkedin.com/in/brandoncastillodev"
            title="Let's connect!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure>
              <img src={linkedin_logo} alt="LinkedIn logo" />
            </figure>
          </a>

          <a
            href="https://github.com/brandoncastillodev"
            title="Let's work!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure>
              <img src={github_logo} alt="GitHub logo" />
            </figure>
          </a>
        </div>
      </section>

      <section id="about">
        <h3>Who I Am and What I Do</h3>
        <p  className="about-body">
          Hello, my name is Brandon, and I'm an enthusiastic person about front-end and UX/UI design. 
          I live in Buenos Aires, Argentina.
          I like innovation and good ideas. I believe that the best solutions are the simplest to implement. 
          I'm studing programming at <a href="https://res.cloudinary.com/daynclfo8/image/upload/v1766414118/2025-12-22-11-35-10_omiccw.png" target="_blank">Universidad Tecnológica Nacional</a>. 
          I'm on my third semester.
          I did a Bootcamp with <a href="https://api.constata.eu/certificate/research+riding+veal+bonfire+dedicator" target="_blank"> Plataforma 5. </a>
          And I completed a <a href="https://openbadgefactory.com/obv3/credentials/b2a9c890eba940b3747c0b7656806656e13cc539" target="_blank">UX Design</a> course where I passed with excellent qualifications. 
          I believe we are living in a new industrial revolution, and I find it incredibly exciting.
          <b>I specialize in developing interfaces based on professional UI design using a pixel-perfect approach.
          I have 1 year of experience.</b> Please check my works <Link to="/works">here</Link> or in my <a href="https://brandon-portfolio-phi.vercel.app" target="_blank">other site</a>.
          {/* I have 1 year of experience working as a full-stack and front-end developer */}
          {/*   I have 1 year of experience, as a full-stack and a front-end. */}
          {/* for everyone.  */}         
          {/*I believe it's pretty exciting for everyr */}
          {/* I learned POO with Java, FP with Python, SQL, DDL, DML, DCL. */}
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
