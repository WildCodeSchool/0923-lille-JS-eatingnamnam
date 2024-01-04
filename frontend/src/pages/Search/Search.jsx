import { useState, useEffect } from "react";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import "./Search.scss";

function Search() {
  const [recipes, setRecipes] = useState();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/recipe`)
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <h1 className="helloSearch">HELLO SEARCH PAGE</h1>;
      {recipes
        ? recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        : "loading"}
    </>
  );
}

export default Search;
