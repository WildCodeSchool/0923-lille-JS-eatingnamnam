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

  return <div>{recipe ? <RecipeCardPage recipe={recipe} /> : "loading"}</div>;
}

export default Recipe;
