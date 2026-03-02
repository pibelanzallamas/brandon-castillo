import React, { useState } from "react";
import edu from "../utils/edu";
import EduCard from "../commons/EduCard";

function Education() {
  const [selEdu, setSelEdu] = useState(edu[0]);

  return (
    <main className="edu">
      <h3 className="titles">Education</h3>
      <div className="front-page-links footer-links">
        {edu.map((ed, i) => (
          <a
            key={i}
            onClick={(e) => {
              setSelEdu(ed);
              e.preventDefault();
            }}
            href="#"
          >
            {selEdu.title == ed.title ? <u> {ed.title}</u> : ed.title}
          </a>
        ))}
      </div>
      <EduCard card={selEdu} />
    </main>
  );
}

export default Education;
