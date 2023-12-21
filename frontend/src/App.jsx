import "./App.scss";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Titrelogo from "./components/Titre logo/Titrelogo";

function App() {
  return (
    <div className="App">
      <Titrelogo />
      <Outlet />
      <Navbar />
    </div>
  );
}

export default App;
