import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import works from "../utils/works";
import WorkCard from "../commons/WorkCard";

function Works() {
  // const dispatch = useDispatch();
  // const esp = useSelector((state) => state.lang.esp);
  const [selWork, setSelWork] = useState(works[0]);
  const [link, setLink] = useState(() => {
    const localStg = localStorage.getItem("link");
    return localStg ? JSON.parse(localStg) : -1;
  });
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    localStorage.setItem("link", JSON.stringify(link));
    setIsChanged(!isChanged);
  }, [link]);

  useEffect(() => {
    setLink(0);
  }, []);

  return (
    <div className="work-content">
      <ul className="side-list">
        {works.map((work, i) => (
          <a
            key={i}
            onClick={() => {
              setSelWork(work);
              setLink(i);
            }}
          >
            {link === i ? <u>{work.title}</u> : work.title}
          </a>
        ))}
      </ul>
      <WorkCard work={selWork} changed={isChanged} />
    </div>
  );
}

export default Works;
