import cv from "../assets/Brandon Castillo Resume.pdf"
import cv_logo from "../assets/cv.svg"
import linkedin_logo from "../assets/linkedin.svg"
import github_logo from "../assets/github.png"

function Home() {
  return (
    <main className="home">
      <section id="hero">
        <h1 className="titles highlight"> <a href="https://linkedin.com/in/brandon-castillo-dev" target="_blank">Hi I'm Brandon Castillo 👋</a></h1>
        
        <h2 className="titles highlight" target="_blank">Front End & UX Designer</h2>

        <figure className="profile-pic">
          <img
            src="https://res.cloudinary.com/daynclfo8/image/upload/w_600,f_webp,q_60/v1730995825/first-linkedin_1_zrrswp.png"
            alt="Brandon Castillo's profile picture"
          />
        </figure>

        <div id="home-icons">
          <a
            href={cv}
            title="Get Cv!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure style={{ aspectRatio: " 1/1" }}>
              <img src={cv_logo} alt="CV Logo" />
            </figure>
          </a>

          <a
            href="https://linkedin.com/in/brandon-castillo-dev"
            title="Let's connect!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure>
              <img src={linkedin_logo} alt="LinkedIn logo" />
            </figure>
          </a>

          <a
            href="https://github.com/pibelanzallamas"
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
        <p>
          Hello, my name is Brandon, and I'm an enthusiastic person about the future and technology
          development. I live and <a  href="https://brandon-portfolio-phi.vercel.app" target="_blank">breathe code</a>. I like innovation and good ideas.
          I believe that the best solutions are the simplest to implement. I'm
          studing programming at <a href="https://res.cloudinary.com/daynclfo8/image/upload/v1766414118/2025-12-22-11-35-10_omiccw.png" target="_blank">Universidad Tecnológica Nacional</a>. I'm on my second semester, I learned POO with Java, FP with Python, SQL, DDL, DML, DCL.
          I graduated as a Full Stack Developer on <a href="https://api.constata.eu/certificate/research+riding+veal+bonfire+dedicator" target="_blank"> Plataforma 5 </a> and I completed a <a href="https://res.cloudinary.com/daynclfo8/image/upload/v1766099125/2025-12-18-18-52-55_gvdaxt.png" target="_blank">UX Designer</a> semester where I passed with excellent qualifications. 
          {/* I believe we are */}
          {/* living in a new industrial revolution, and I find it incredibly exciting */}
          {/* for everyone. */}         
          {/*I believe it's pretty exciting for everyr */}
        </p>
      </section>

      <section className="technologies">
        <h3>Technologies I Use Daily</h3>
        <div className="tech-lists">
          <ul>
            <li>GNU/Linux</li>
            <li>Bash/Unix</li>
            <li>Git/GitHub</li>
            <li>Python</li>
            <li>Visual Studio Code</li>
            <li>ChatGPT</li>
          </ul>
          <ul>
            <li>JavaScript</li>
            <li>HTML5</li>
            <li>Sass</li>
            <li>React</li>
            <li>Windows/Mac</li>
            <li>Axios</li>
          </ul>
        </div>
      </section>

      <section className="technologies">
        <h3>Technologies I Have Experience With</h3>
        <div className="tech-lists">
          <ul>
            <li>Figma</li>
            <li>Trello</li>
            <li>Tailwind CSS</li>
            <li>Redux</li>
            <li>Chakra Ux</li>
            <li>MUI</li>           
          </ul>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Sequelize</li>
            <li>PostgreSQL</li>
            <li>SQLite3</li>
            <li>JWT</li>
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
          src="http://ghchart.rshah.org/3fc761/pibelanzallamas"
          alt="pibelanzallamas's Github chart"
        />
      </section>
    </main>
  );
}

export default Home;
