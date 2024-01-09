import { useEffect, useState } from "react";
import RecipeCardPage from "../../components/RecipeCardPage/RecipeCardPage";
import "./Recipe.scss";
import RecipeSteps from "../../components/RecipeSteps/RecipeSteps";

function Recipe() {
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/recipe/1`)
      .then((response) => response.json())
      .then((data) => setRecipe(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="recipe__cardContainer">
      {recipe ? <RecipeCardPage recipe={recipe[0]} /> : "loading"}
      <main className="recipe__stepContainer">
        {recipe
          ? recipe.map((step) => (
              <RecipeSteps
                recipeStep={step.description}
                stepNumber={step.number_step}
              />
            ))
          : "no steps found"}
      </main>
    </div>
  );
}

export default Recipe;
