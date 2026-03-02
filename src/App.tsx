import "./styles/app.css";
import Header from "./components/Header";
import { Analytics } from "@vercel/analytics/react";
import Main from "./components/Main";

function App() {
  return (
    <div className="layout">
      <Analytics />
      <Header />
      <div className="content" style={{ flex: "1" }}>
        <Main/>
      </div>
    </div>
  );
}

export default App;
