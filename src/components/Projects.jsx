import React, { useEffect, useState } from "react";
import projects from "../utils/projects";
import WorkCard from "../commons/WorkCard";

function Projects() {
  const [selWork, setSelWork] = useState(projects[0]);
  const [link, setLink] = useState(-1);

  useEffect(() => {
    setLink(0);
  }, []);

  return (
    <div className="work-content">
      <ul className="side-list">
        {projects.map((project, i) => (
          <a
            key={i}
            onClick={() => {
              setSelWork(project);
              setLink(i);
            }}
          >
            {link === i ? <u>{project.title}</u> : project.title}
          </a>
        ))}
      </ul>

      <WorkCard work={selWork} />
    </div>
  );
}

export default Projects;
