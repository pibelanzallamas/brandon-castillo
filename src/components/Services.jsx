import React from "react";

function Services() {
  return (
    <main className="edu">
      <h3>Services</h3>

      <div className="tech-lists">
        <section className="service">
          <figure className="service-image">
            <img src="https://ddi-dev.com/uploads/backend-is.png"></img>
          </figure>

          <h4>Back End Developer</h4>
          <ul>
            <li>Designing Databases</li>
            <li>Creating Rest API's</li>
            <li>Using External APIs</li>
            {/* <li>Server Developing</li> */}
            <li>Designing Busniess Logic</li>
            <li>Comunication with DBs</li>
            <li>Authentication</li>
          </ul>
        </section>
        <section className="service">
          <figure className="service-image">
            <img src="https://res.cloudinary.com/proxify-io/image/upload/c_fit,f_auto,q_auto,dpr_auto,w_900/v1/cms/images/gallery/xizwtpiwqewW9qZVGgeXy5Ee0kOc8MAHrkFwEXtm.png"></img>
          </figure>

          <h4>Front End Developer</h4>
          <ul>
            <li>Designing Attractive Components</li>
            <li>Connecting to APIs</li>
            <li>Responsive Design</li>
            <li>Design to Code in simple steps</li>
            <li>Multiple frameworks, libraries and packages</li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Services;
