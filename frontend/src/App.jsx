import "./App.scss";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import TitleBar from "./components/TitleBar/TitleBar";

function App() {
  return (
    <div className="App">
      <TitleBar />
      <Outlet />
      <Navbar />
    </div>
  );
}

export default App;
