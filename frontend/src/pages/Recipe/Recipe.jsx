import { useEffect, useState } from "react";
import RecipeInfo from "../../components/RecipeInfo/RecipeInfo";
import "./Recipe.scss";

function Recipe() {
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/randomrecipe`)
      .then((response) => response.json())
      .then((data) => setRecipe(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section>{recipe ? <RecipeInfo recipe={recipe} /> : "loading"}</section>
  );
}

export default Recipe;
