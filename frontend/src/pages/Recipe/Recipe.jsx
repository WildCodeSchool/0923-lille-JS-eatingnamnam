import { useEffect, useState } from "react";
import RecipeCardPage from "../../components/RecipeCardPage/RecipeCardPage";
import "./Recipe.scss";
import RecipeSteps from "../../components/RecipeSteps/RecipeSteps";

function Recipe() {
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/randomrecipe`)
      .then((response) => response.json())
      .then((data) => setRecipe(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {recipe ? <RecipeCardPage recipe={recipe} /> : "loading"}
      {recipe ? <RecipeSteps recipe={recipe} /> : "error no recipe found"}
    </div>
  );
}

export default Recipe;
