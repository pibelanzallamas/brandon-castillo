import cv from "../assets/Brandon Castillo Resume.pdf"
import cv_logo from "../assets/cv.svg"
import linkedin_logo from "../assets/linkedin.svg"
import github_logo from "../assets/github.png"

function Home() {
  return (
    <main className="home">
      <section id="hero">
        <h1 className="titles highlight">Hi I'm Brandon Castillo 👋</h1>
        
        <h2 className="titles highlight">Full Stack Developer Jr</h2>

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
            href="https://linkedin.com/in/bran-castillo-dev"
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
          Hello, my name is Brandon, and I'm an enthusiastic person about the future and a technology
          developer. I live and breathe code. I like innovation and good ideas.
          I believe that the best solutions are the simplest to implement. I'm
          studing software development at my nearest university (Universidad Tecnológica Nacional), first semester, functions, lists, diccionaries, file managment (Python). I completed a Full
          Stack Developer Bootcamp where I embrace the globalize world. We are living in a new industrial revolution and I believe it's pretty exciting for everyone.
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
            <li>Git</li>
            <li>GitHub</li>
            <li>Python3</li>
            <li>Visual Studio Code</li>
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
            <li>Dailys</li>
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
