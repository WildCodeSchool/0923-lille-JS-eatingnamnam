import { useEffect, useState } from "react";
import RecipeCardPage from "../../components/RecipeCardPage/RecipeCardPage";
import "./Recipe.scss";

function Recipe() {
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/randomrecipe`)
      .then((response) => response.json())
      .then((data) => setRecipe(data))
      .catch((error) => console.error(error));
  }, []);

  console.warn(recipe);
  return (
    <section>{recipe ? <RecipeCardPage recipe={recipe} /> : "loading"}</section>
  );
}

export default Recipe;
