import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLang } from "../state/lang";

function Works() {
  const dispatch = useDispatch();
  const esp = useSelector((state) => state.lang.esp);
  const cool = true;

  useEffect(() => {
    console.log(esp);
  }, [esp]);

  return (
    <div>
      <button
        onClick={() => {
          dispatch(setLang(cool));
        }}
      >
        Dale
      </button>
    </div>
  );
}

export default Works;
