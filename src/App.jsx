import "./styles/app.css";
import AppRoutes from "./components/AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Analytics />
      <Navbar />
      <div className="content">
        <AppRoutes />
      </div>
      <Footer />
    </>
  );
}

export default App;
