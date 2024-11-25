import React, { useEffect, useState } from "react";
import left from "../assets/arrow-left-circle.svg";
import right from "../assets/arrow-right-circle.svg";

function ExpCard({ card, disparador }) {
  const [numImg, setNumImg] = useState(0);

  useEffect(() => {
    setNumImg(0);
  }, [disparador]);

  return (
    <div className="edu-card">
      <section className="works-header">
        <h3>{card.title}</h3>
      </section>

      <section className="works-image">
        <figure style={{ aspectRatio: "1280 / 715" }}>
          <img src={card.photos[numImg]} alt={card.title} />
          {numImg > 0 && (
            <figcaption
              id="left"
              onClick={() => setNumImg(numImg - 1)}
              className="left-right-buttons"
            >
              <img src={left} alt="" />
            </figcaption>
          )}

          {numImg < card.photos.length - 1 && (
            <figcaption
              id="right"
              onClick={() => setNumImg(numImg + 1)}
              className="left-right-buttons"
            >
              <img src={right} alt="" />
            </figcaption>
          )}
        </figure>
      </section>

      <section className="works-links">
        <p>
          <b>Links: </b>
          {/* <b> */}
          <a href={card.youtube} target="_blank">
            Demo
          </a>
          {/* </b>{" "} */} - {/* <b> */}
          <a href={card.github} target="_blank">
            Github
          </a>
          {/* </b>{" "} */} - {/* <b> */}
          <a href={card.web} target="_blank">
            Website
          </a>
          {/* </b> */}
        </p>
      </section>
      <section className="works-desc">
        <h4>Description:</h4>
        <p>{card.desc}</p>
      </section>
      <section className="works-date">
        <p>
          {card.date ? (
            <>
              <b>Date:</b> {card.date}
            </>
          ) : (
            <>
              <b>Start Date:</b> {card.inicio} - <b>End Date:</b> {card.final}
            </>
          )}
        </p>
      </section>
      <section className="main-features">
        <h4>Main Features:</h4>
        <ul className="works-features">
          {card.mainFeat.map((ele) => (
            <li>
              <b>{ele.title}</b> {ele.desc}
            </li>
          ))}
        </ul>
      </section>
      <section className="works-techs">
        <h4>Technologies used:</h4>
        <ul className="tech-lists  works-features">
          {card.techs.map((ele) => (
            <li>{ele}</li>
          ))}
        </ul>
      </section>
      <section className="works-tools">
        <h4>Tools for Planning and Design</h4>
        <ul className="tech-lists  works-features">
          {card.tools.map((ele) => (
            <li>{ele}</li>
          ))}
          {card.linksTools && (
            <>
              <li>
                <a href={card.linksTools[0]} target="_blank">
                  <u>Trello</u>
                </a>
              </li>
              <li>
                <a href={card.linksTools[1]} target="_blank">
                  <u>Figma</u>
                </a>
              </li>
            </>
          )}
        </ul>
      </section>
      {/* <section className="main-features">
        <h4>Main Difficulties:</h4>
        <ul className="works-features">
          <li>
            <b>Responsive Design:</b> Optimized for seamless navigation across
            mobile devices, tablets, and desktops.
          </li>
          <li>
            <b>Dynamic Interface:</b> Built with modern technologies to deliver
            engaging animations and an attractive visual experience.
          </li>
          <li>
            <b>Talent Connection:</b> Detailed profiles highlight skills,
            specializations, and featured projects.
          </li>
          <li>
            <b>Scalability:</b> Developed using technologies that support future
            growth and adaptability.
          </li>
        </ul>
      </section> */}
      {/* <hr /> */}
    </div>
  );
}

export default ExpCard;
