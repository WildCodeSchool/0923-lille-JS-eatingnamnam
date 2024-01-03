import "./Homepage.scss";
import { useEffect, useState } from "react";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

function Homepage() {
  const [recipe, setRecipe] = useState();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/randomrecipe`)
      /*     fetch("http://localhost:3310/api/randomrecipe") */
      .then((response) => response.json())
      .then((data) => setRecipe(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      {recipe ? console.warn("recipe:", recipe) : "null"};
      <RecipeCard />
      <h1 className="helloHome">HELLO HOMEPAGE</h1>;
    </>
  );
}

export default Homepage;
