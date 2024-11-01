import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLang } from "../state/lang";
import works from "../utils/works";
import WorkCard from "../commons/WorkCard";

function Works() {
  const dispatch = useDispatch();
  const esp = useSelector((state) => state.lang.esp);
  const [selWork, setSelWork] = useState(works[0]);

  useEffect(() => {}, [setSelWork]);

  return (
    <div className="flex">
      <ul className="side-list">
        {works.map((work) => (
          <a onClick={() => setSelWork(work)}>{work.title}</a>
        ))}
      </ul>
      <WorkCard work={selWork} />
    </div>
  );
}

export default Works;
