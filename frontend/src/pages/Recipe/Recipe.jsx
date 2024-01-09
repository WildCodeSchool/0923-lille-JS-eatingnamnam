import { useEffect, useState } from "react";
import RecipeCardPage from "../../components/RecipeCardPage/RecipeCardPage";
import IngredientCard from "../../components/IngredientCard/IngredientCard";
import "./Recipe.scss";

function Recipe() {
  const [recipe, setRecipe] = useState();
  const [ingredientList, setIngredientList] = useState();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/recipe/1`)
      .then((response) => response.json())
      .then((data) => setRecipe(data))
      .catch((error) => console.error(error));

    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/ingredientlist/recipe/1`)
      .then((response) => response.json())
      .then((data) => setIngredientList(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {recipe ? <RecipeCardPage recipe={recipe} /> : "loading"}
      {ingredientList ? (
        <IngredientCard ingredientList={ingredientList} />
      ) : (
        "loading"
      )}
    </>
  );
}

export default Recipe;
