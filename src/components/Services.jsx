import React from "react";

function Services() {
  return (
    <main className="edu">
      <h3>Services</h3>

      <div className="services-lists">
        <section className="service">
          <h4>Back End Developer</h4>
          <figure className="service-image">
            <img src="https://ddi-dev.com/uploads/backend-is.png"></img>
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
          <figure className="service-image">
            <img src="https://res.cloudinary.com/proxify-io/image/upload/c_fit,f_auto,q_auto,dpr_auto,w_900/v1/cms/images/gallery/xizwtpiwqewW9qZVGgeXy5Ee0kOc8MAHrkFwEXtm.png"></img>
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
