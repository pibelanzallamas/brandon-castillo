import React, { useState } from "react";
import edu from "../utils/edu";
import WorkCard from "../commons/WorkCard";

function Education() {
  const [selWork, setSelWork] = useState(edu[0]);
  return (
    <div className="flex">
      <ul className="side-list">
        {edu.map((ed) => (
          <a onClick={() => setSelWork(ed)}>{ed.title}</a>
        ))}
      </ul>
      <WorkCard work={selWork} />
    </div>
  );
}

export default Education;
