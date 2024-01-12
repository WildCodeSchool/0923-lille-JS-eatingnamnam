import "./App.scss";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import TitleBar from "./components/TitleBar/TitleBar";
import { NavBarProvider } from "./components/Contexts/navBarContext";

function App() {
  const location = useLocation();
  return (
    <NavBarProvider>
      <div className="App">
        {location.pathname === "/login" || location.pathname === "/recipe" ? (
          ""
        ) : (
          <TitleBar />
        )}
        <Outlet />
        {location.pathname === "/login" ? "" : <Navbar />}
      </div>
    </NavBarProvider>
  );
}

export default App;
