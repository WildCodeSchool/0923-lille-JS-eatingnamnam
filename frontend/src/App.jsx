import "./App.scss";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import RecipeCard from "./components/RecipeCard/RecipeCard";

function App() {
  return (
    <div className="App">
      <RecipeCard />
      <Outlet />
      <Navbar />
    </div>
  );
}

export default App;
