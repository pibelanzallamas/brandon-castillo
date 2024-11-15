import React, { useState, useEffect } from "react";
import edu from "../utils/edu";
import EduCard from "../commons/EduCard";

function Education() {
  const [selEdu, setSelEdu] = useState(edu[0]);

  return (
    <main className="edu">
      <h3>Education</h3>
      <div className="front-page-links footer-links">
        {edu.map((ed, i) => (
          <a
            key={i}
            onClick={() => {
              setSelEdu(ed);
            }}
            href="#"
          >
            {selEdu.title == ed.title ? <u>{ed.title}</u> : ed.title}
          </a>
        ))}
      </div>
      <div className="edu-card">
        <h3>{selEdu.title}</h3>
        <p>{selEdu.desc}</p>
        <p>{selEdu.carrera}</p>
      </div>
    </main>
  );
}

export default Education;
