import React from "react";
import { useSelector } from "react-redux";

function Home() {
  const lang = useSelector((state) => state.lang);

  console.log(lang);
  return <div>Home</div>;
}

export default Home;
