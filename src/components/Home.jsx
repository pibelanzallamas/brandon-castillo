import { useSelector } from "react-redux"
import exp from "../utils/newExp"
import projects from "../utils/newProjects"
import NewExpCard from "../commons/NewExpCard"
import NewProjectCard from "../commons/NewProjectCard"

function Home() {
  const leng = useSelector(state => state.lang.esp);

  return (
    <>
    <main className="home">
      <section id="about" className="section-title">
        <h2>{leng ? "Acerca" : "About"}</h2>
        <p className="about-body">
          {leng ? 
          <> 
            Soy Desarrollador Front End con especialidad en interactividad web,
            enfocado en construir interfaces de usuario intuitivas, inmersivas y pixel-perfect. 
            Disfruto trabajar en la intersección entre diseño y desarrollo, 
            donde una gran experiencia de usuario se encuentra con código robusto, limpio y escalable.
            Actualmente, soy frontend en{" "}
            <a 
              href="https://cgcminc.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              CGC MINC
            </a>, 
            donde traduzco diseños de alta fidelidad en experiencias 
            responsivas y accesibles, incluyendo animaciones 3D y 2D.
          </> 
          :
          <> 
            I’m a Front End Developer specializing in web interactivity, 
            focused on building intuitive, immersive, pixel-perfect user interfaces. 
            I enjoy working at the intersection of design and development, 
            where great user experience meets robust, clean, and scalable code. 
            Currently, I’m a frontend developer at{" "}
            <a 
              href="https://cgcminc.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              CGC MINC
            </a>, 
            where I translate high-fidelity designs into responsive and accessible experiences, 
            including 3D and 2D animations.
          </>}
        </p>
      </section>

      <section id="experience" className="section-title">
        <h2>{leng?"Experiencia":"Experience"}</h2>
        {exp.map((ele,i)=>(
          <NewExpCard exp={ele} key={i}/>
        ))}
      </section>

      <section id="projects" className="section-title">
        <h2>{leng ? "Proyectos":"Projects"}</h2>
        {projects.map((ele,i)=>(
          <NewProjectCard proj={ele} key={i}/>
        ))}
      </section>

      <section id="charts" className="section-title">
        <h2>Charts</h2>
        <img
          src="http://ghchart.rshah.org/3fc761/brandoncastillodev"
          alt="brandoncastillodev's Github chart"
        />
      </section>
    </main>
    <footer>
      <div className="footer-links">
        <p class="firma">Made with ❤️ by Brandon 🏰</p>
      </div>
    </footer>
    </>
  );
}

export default Home;

      {/* <section className="technologies">
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
      </section> */}

      {/* <section id="soft-skills">
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
      </section> */}


  // <figure className="profile-pic">
  //         <img
  //           src="https://res.cloudinary.com/daynclfo8/image/upload/w_600,f_webp,q_60/v1730995825/first-linkedin_1_zrrswp.png"
  //           alt="Brandon Castillo's profile picture"/>
  //       </figure>


      // <section className="technologies">
      //   <h3>Technologies I Have Experience With</h3>
      //   <div className="tech-lists">
      //     <ul>
      //       <li>Figma</li>
      //       <li>Trello</li>
      //       <li>UXtweak</li>
      //       <li>Miro</li>
      //       <li>Redux</li>
      //       <li>Tailwind CSS</li>
      //     </ul>
      //     <ul>
      //       <li>Chakra UX</li>
      //       <li>MUI</li>      
      //       <li>Express.js</li>
      //       <li>Sequelize</li>
      //       <li>PostgreSQL</li>
      //       <li>SQLite3</li>
            
      //     </ul>
      //   </div>
      // </section>