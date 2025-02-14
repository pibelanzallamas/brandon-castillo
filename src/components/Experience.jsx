import React, { useEffect, useState } from "react";
import exp from "../utils/exp";
import ExpCard from "../commons/ExpCard";
import { useLocation } from "react-router-dom";

function Experience() {
  const location = useLocation();
  const [selExp, setSelExp] = useState(exp[location.state?.finalJob] || exp[0]);
  const [changeItem, setChangeItem] = useState(false);

  return (
    <main className="edu">
      <h3 className="titles">Experience</h3>
      <div className="front-page-links footer-links">
        {exp.map((ex, i) => (
          <a
            key={i}
            onClick={(e) => {
              setSelExp(ex);
              setChangeItem(!changeItem);
              e.preventDefault();
            }}
            href="#"
          >
            {selExp.title == ex.title ? <u>{ex.title}</u> : ex.title}
          </a>
        ))}
      </div>
      <ExpCard card={selExp} disparador={changeItem} />
    </main>
  );
}

export default Experience;
