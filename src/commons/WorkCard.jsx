import React from "react";

function WorkCard({ work }) {
  return (
    <div className="work-card">
      <p className="work-title">{work.title}</p>
      <p className="work-desc">{work.desc}</p>

      {work.photos.length > 0 &&
        work.photos.map(
          (ele, i) =>
            ele.length > 10 && (
              <figure className="work-images" key={i}>
                <img src={ele} alt={`${work.title} image N* ${i}`} />
              </figure>
            )
        )}

      <div className="work-links">
        <figure>
          <img
            src="https://res.cloudinary.com/daynclfo8/image/upload/v1730563754/Group_3_butzfd.svg"
            alt={`link for ${work.title}`}
            srcset=""
          />
        </figure>
        <figure>
          <img
            src="https://res.cloudinary.com/daynclfo8/image/upload/v1730563776/Vector_aejcoc.svg"
            alt={`github link for ${work.title}`}
            srcset=""
          />
        </figure>
        <figure>
          <img
            src="https://res.cloudinary.com/daynclfo8/image/upload/v1730563767/Group_1_kqupq1.svg"
            alt={`youtube link for ${work.title}`}
            srcset=""
          />
        </figure>
      </div>
    </div>
  );
}

export default WorkCard;
