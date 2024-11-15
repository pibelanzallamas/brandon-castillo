import React, { useState, useEffect } from "react";
import edu from "../utils/edu";
import EduCard from "../commons/EduCard";

function Education() {
  const [selWork, setSelWork] = useState(edu[0]);
  const [link, setLink] = useState(-1);

  useEffect(() => {
    setLink(0);
  }, []);

  return (
    <main>
      <h3>Education</h3>
      <div className="links final-links">
        {edu.map((ed, i) => (
          <a
            key={i}
            onClick={() => {
              setSelWork(ed);
              setLink(i);
            }}
          >
            {link === i ? <u>{ed.title}</u> : ed.title}
          </a>
        ))}
      </div>
      {/* <EduCard work={selWork} /> */}
    </main>
  );
}

export default Education;
