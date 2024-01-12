import "./App.scss";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import TitleBar from "./components/TitleBar/TitleBar";
import { NavBarProvider } from "./components/Contexts/navBarContext";

function App() {
  return (
    <NavBarProvider>
      <div className="App">
        <TitleBar />
        <Outlet />
        <Navbar />
      </div>
    </NavBarProvider>
  );
}

export default App;
