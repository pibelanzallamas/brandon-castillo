import React from "react";

function AboutMe() {
  return (
    <div className="about-content">
      <h2>Profile</h2>
      <figure className="profile-pic">
        <img
          src="https://res.cloudinary.com/daynclfo8/image/upload/v1730995825/first-linkedin_1_zrrswp.png"
          alt=""
        />
      </figure>
      <div className="links">
        <a href="https://drive.google.com/file/d/1aWjYJvjbn3KkS_K5ZzTUhsnGN88RpvuE/view?usp=sharing">
          <figure>
            <img
              src="https://res.cloudinary.com/daynclfo8/image/upload/v1730998416/cv-icon_bflrn9.png"
              alt=""
            />
          </figure>
        </a>
        <a href="https://linkedin.com/in/brandon-castillo-dev">
          <figure>
            <img
              src="https://res.cloudinary.com/daynclfo8/image/upload/v1730998429/linkedin_xg1ahk.svg"
              alt=""
            />
          </figure>
        </a>
        <a href="https://github.com/pibelanzallamas">
          <figure>
            <img
              src="https://res.cloudinary.com/daynclfo8/image/upload/v1730563776/Vector_aejcoc.svg"
              alt=""
            />
          </figure>
        </a>
      </div>
      <div className="profile-texts">
        <section>
          <h3>About</h3>
          <p>
            Tengo 28 anios y soy fanatico de la tecnologia, y de sus
            invenciones. Creo que la solucion mas facil y simple es la mejor.
            Termine el bootcamp de P5 (Javascript) y ahora estoy en l
          </p>
        </section>
        <section>
          <h3>Technologies</h3>
          <p>
            html - css - javascript - react - redux - node - express - sql -
            postrgres - sql - sass - figma - emailjs - sequelize - router - hole
            - in the - ground - the -groud - hole i n - the mundo - loco
          </p>
        </section>
        <section>
          <h3>Soft skills</h3>
          <p>scrum - agile method - team work - sosl - hole - the - ground</p>
        </section>
      </div>
    </div>
  );
}

export default AboutMe;
