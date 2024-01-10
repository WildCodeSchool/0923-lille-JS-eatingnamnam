import { useEffect, useState } from "react";
import RecipeInfo from "../../components/RecipeInfo/RecipeInfo";
import "./Recipe.scss";
import AddComment from "../../components/AddComment/AddComment";

function Recipe() {
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/randomrecipe`)
      .then((response) => response.json())
      .then((data) => setRecipe(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <header>{recipe ? <RecipeInfo recipe={recipe} /> : "loading"}</header>
      <AddComment />
    </>
  );
}

export default Recipe;
