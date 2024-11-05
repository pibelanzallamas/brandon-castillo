import React from "react";

function EduCard({ work }) {
  return (
    <div>
      <div className="work-card">
        <p className="work-title">
          {work.title} - {work.carrera}
        </p>
        <p>
          {work.inicio} - {work.final}
        </p>
        <p className="work-desc">{work.desc}</p>
        {/* {work.photos.length > 0 &&
          work.photos.map(
            (ele, i) =>
              ele.length > 10 && (
                <figure className="work-images" key={i}>
                  <img src={ele} alt={`${work.title} image N* ${i}`} />
                </figure>
              )
          )} */}
      </div>
    </div>
  );
}

export default EduCard;
