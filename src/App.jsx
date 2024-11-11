import "./styles/app.css";
import AppRoutes from "./components/AppRoutes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
