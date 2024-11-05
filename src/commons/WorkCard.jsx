import React, { useState, useEffect } from "react";

function WorkCard({ work, changed }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const text = work.desc;
  const limit = 70;

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    setIsExpanded(false);
  }, [changed]);

  const isTextLong = text.length > limit;
  const displayedText =
    isExpanded || !isTextLong ? text : text.slice(0, limit) + "...";

  return (
    <div className="work-card">
      <p className="work-title">{work.title}</p>
      {displayedText}
      {isTextLong && (
        // <p
        //   className="work-desc"
        // >
        //   {work.desc}
        // </p>
        <a style={{ cursor: "pointer" }} onClick={toggleExpansion}>
          {isExpanded ? " Leer menos" : " Leer más"}
        </a>
      )}
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
          <a href={work.gh} target="_blank">
            <img
              src="https://res.cloudinary.com/daynclfo8/image/upload/v1730563776/Vector_aejcoc.svg"
              alt={`github link for ${work.title}`}
              srcset=""
            />
          </a>
        </figure>
        <figure>
          <a href={work.url} target="_blank">
            <img
              src="https://res.cloudinary.com/daynclfo8/image/upload/v1730563754/Group_3_butzfd.svg"
              alt={`link for ${work.title}`}
              srcset=""
            />
          </a>
        </figure>
        <figure>
          <a href={work.video} target="_blank">
            <img
              src="https://res.cloudinary.com/daynclfo8/image/upload/v1730563767/Group_1_kqupq1.svg"
              alt={`youtube link for ${work.title}`}
              srcset=""
            />
          </a>
        </figure>
      </div>
    </div>
  );
}

export default WorkCard;
