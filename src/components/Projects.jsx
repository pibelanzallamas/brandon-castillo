import React, { useState } from "react";
import projects from "../utils/projects";
import WorkCard from "../commons/WorkCard";

function Projects() {
  const [selWork, setSelWork] = useState(projects[0]);

  return (
    <div className="flex">
      <ul className="side-list">
        {projects.map((project) => (
          <a onClick={() => setSelWork(project)}>{project.title}</a>
        ))}
      </ul>

      <WorkCard work={selWork} />
    </div>
  );
}

export default Projects;
