import "./styles/app.css";
import AppRoutes from "./components/AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <AppRoutes />
      </div>
      <Footer />
    </>
  );
}

export default App;
