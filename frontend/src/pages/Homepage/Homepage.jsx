import "./Homepage.scss";
import { useEffect, useState } from "react";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import Swipper from "../../components/Swipper/Swipper";

function Homepage() {
  const [recipe, setRecipe] = useState();
  const [vegan, setVegan] = useState();
  const [mexican, setMexican] = useState();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/randomrecipe`)
      .then((response) => response.json())
      .then((data) => setRecipe(data))
      .catch((error) => console.error(error));

    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/tag/1`)
      .then((response) => response.json())
      .then((data) => setVegan(data))
      .catch((error) => console.error(error));

    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/tag/2`)
      .then((response) => response.json())
      .then((data) => setMexican(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {recipe ? <RecipeCard recipe={recipe} /> : "loading"}
      {vegan
        ? vegan.map((veganRecipe) => (
            <RecipeCard key={recipe.id} recipe={veganRecipe} />
          ))
        : "loading"}
      {mexican
        ? mexican.map((mexicanRecipe) => (
            <RecipeCard key={recipe.id} recipe={mexicanRecipe} />
          ))
        : "loading"}
      <Swipper />
    </>
  );
}

export default Homepage;
