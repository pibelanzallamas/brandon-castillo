import React from "react";
import { useSelector } from "react-redux";

function Home() {
  const lang = useSelector((state) => state.lang);

  console.log(lang);
  return (
    <div className="home">
      {/* <h2 style={{ textAlign: "center" }}>Full Stack Developer</h2>
      <br />
      <p>
        I'm capable of doing website from zero to complete, doing pair
        programming, work with in teams, agile methos etc.'
      </p>
      <br /> */}
    </div>
  );
}

export default Home;
