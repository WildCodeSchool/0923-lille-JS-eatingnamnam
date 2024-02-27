import "./App.scss";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import TitleBar from "./components/TitleBar/TitleBar";
import { NavBarProvider } from "./contexts/navBarContext";
import { UserProvider } from "./contexts/userContext";

function App() {
  const location = useLocation();
  return (
    <NavBarProvider>
      <UserProvider>
        <div className="App">
          {location.pathname === "/login" || location.pathname === "/recipe" ? (
            ""
          ) : (
            <TitleBar />
          )}
          <Outlet />
          {location.pathname === "/login" ? "" : <Navbar />}
        </div>
      </UserProvider>
    </NavBarProvider>
  );
}

export default App;
