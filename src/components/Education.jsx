import React, { useState, useEffect } from "react";
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
            onClick={() => {
              setSelEdu(ed);
            }}
            href="#"
          >
            {selEdu.title == ed.title ? (
              <p style={{ color: "#F09440" }}>
                <u> {ed.title}</u>
              </p>
            ) : (
              ed.title
            )}
          </a>
        ))}
      </div>
      <EduCard card={selEdu} />
    </main>
  );
}

export default Education;
