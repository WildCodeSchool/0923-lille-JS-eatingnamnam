import "./App.scss";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import TitleBar from "./components/TitleBar/TitleBar";
import { NavBarProvider } from "./components/Contexts/navBarContext";
import { UserProvider } from "./components/Contexts/userContext";
import { FavoriteProvider } from "./components/Contexts/favoritesContext";

function App() {
  const location = useLocation();
  return (
    <NavBarProvider>
      <UserProvider>
        <FavoriteProvider>
          <div className="App">
            {location.pathname === "/login" ||
            location.pathname === "/recipe" ? (
              ""
            ) : (
              <TitleBar />
            )}
            <Outlet />
            {location.pathname === "/login" ? "" : <Navbar />}
          </div>
        </FavoriteProvider>
      </UserProvider>
    </NavBarProvider>
  );
}

export default App;
