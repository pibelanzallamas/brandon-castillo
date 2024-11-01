import "./styles/app.css";
import AppRoutes from "./components/AppRoutes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
