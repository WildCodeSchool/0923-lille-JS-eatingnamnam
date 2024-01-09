import { useEffect, useState } from "react";
import RecipeInfo from "../../components/RecipeInfo/RecipeInfo";
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
      <section>{recipe ? <RecipeInfo recipe={recipe} /> : "loading"}</section>
      {ingredientList ? (
        <IngredientCard ingredientList={ingredientList} />
      ) : (
        "loading"
      )}
    </>
  );
}

export default Recipe;
