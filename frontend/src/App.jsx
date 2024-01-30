import "./App.scss";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import TitleBar from "./components/TitleBar/TitleBar";
import { NavBarProvider } from "./components/Contexts/navBarContext";
import { UserProvider } from "./components/Contexts/userContext";

/**
 *
 * @returns  Renders the main app component which includes the nav bar and title bar along with the outlet for The main component of the application.
 */

function App() {
  const location = useLocation();
  return (
    <NavBarProvider>
      <UserProvider>
        <div className="App">
          {/* dont show TitleBar on /login or /register pages */}
          {location.pathname === "/login" || location.pathname === "/recipe" ? (
            ""
          ) : (
            <TitleBar />
          )}
          <Outlet />
          {/* dont show NavBar on /Login */}
          {location.pathname === "/login" ? "" : <Navbar />}
        </div>
      </UserProvider>
    </NavBarProvider>
  );
}

export default App;
