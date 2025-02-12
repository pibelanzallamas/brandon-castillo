import "./styles/app.css";
import AppRoutes from "./components/AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Analytics />
      <Navbar />
      <div className="content" style={{ flex: "1" }}>
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
