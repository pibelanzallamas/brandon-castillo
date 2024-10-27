import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Works from "./components/Works";
import AboutMe from "./components/AboutMe";
import "./styles/app.css";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="works" element={<Works />} />
        <Route path="about-me" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
