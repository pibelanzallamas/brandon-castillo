import React from "react";

function Services() {
  return (
    <main className="edu">
      <h3>Services</h3>

      <div className="services-lists">
        <section className="service">
          <h4>Back End Developer</h4>
          <figure
            style={{ aspectRatio: "1440 / 969" }}
            className="service-image"
          >
            <img src="https://res.cloudinary.com/daynclfo8/image/upload/v1733414684/backend-is.png"></img>
          </figure>

          <h4>Main Functions:</h4>
          <ul>
            <li>Designing Databases</li>
            <li>Creating REST APIs</li>
            <li>Using External APIs</li>
            <li>Designing Business Logic</li>
            <li>Communication with DBs</li>
            <li>Authentication</li>
          </ul>
        </section>
        <section className="service">
          <h4>Front End Developer</h4>
          <figure
            style={{ aspectRatio: "900 / 590" }}
            className="service-image"
          >
            <img src="https://res.cloudinary.com/daynclfo8/image/upload/v1733415003/frontend.webp"></img>
          </figure>
          <h4>Main Functions:</h4>
          <ul>
            <li>Designing Attractive User Interfaces</li>
            <li>Connecting to APIs</li>
            <li>Responsive Design</li>
            <li>Turning Designs into Code</li>
            <li>Multiple frameworks, libraries and packages</li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Services;
