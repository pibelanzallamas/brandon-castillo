import React, { useState } from "react";
import works from "../utils/works";
import ExpCard from "../commons/ExpCard";

function Works() {
  const [selExp, setSelExp] = useState(works[0]);
  const [changeItem, setChangeItem] = useState(false);

  // ?
  // useEffect(() => {
  //   localStorage.setItem("link", JSON.stringify(link));
  //   setIsChanged(!isChanged);
  // }, [link]);

  // useEffect(() => {
  //   setLink(0);
  // }, []);

  return (
    <main className="edu">
      <h3>Works</h3>
      {/* titulos */}
      <div className="front-page-links footer-links">
        {works.map((ex, i) => (
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
      <ExpCard card={selExp} disparador={changeItem} />
    </main>
  );
}

export default Works;
