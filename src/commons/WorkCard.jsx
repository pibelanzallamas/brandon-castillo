import React from "react";

function WorkCard({ work }) {
  return (
    <div className="work-card">
      <h2>{work.title}</h2>
      <p>{work.desc}</p>
      <figure>
        <img src={work.img} alt={work.title} />
      </figure>
    </div>
  );
}

export default WorkCard;
