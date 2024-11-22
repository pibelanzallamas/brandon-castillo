import React, { useState } from "react";
import exp from "../utils/exp";
import ExpCard from "../commons/ExpCard";

function Experience() {
  const [selExp, setSelExp] = useState(exp[0]);
  const [changeItem, setChangeItem] = useState(false);

  return (
    <main className="edu">
      <h3>Experience</h3>
      {/* titulos */}
      <div className="front-page-links footer-links">
        {exp.map((ex, i) => (
          <a
            key={i}
            onClick={() => {
              setSelExp(ex);
              setChangeItem(!changeItem);
            }}
            href="#"
          >
            {selExp.title == ex.title ? <u>{ex.title}</u> : ex.title}
          </a>
        ))}
      </div>
      {/* descripciones */}
      <ExpCard card={selExp} disparador={changeItem} />
    </main>
  );
}

export default Experience;
