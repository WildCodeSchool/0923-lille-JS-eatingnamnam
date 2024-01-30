import "./Favorites.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// Components
import RecipeCard from "../../components/RecipeCard/RecipeCard";

/**
 * @returns  Favorites page component that displays the user's favorite recipes
 */

function Favorites() {
  //  Get id parameter from URL
  const { userId } = useParams();

  // State for the favorites's user recipes
  const [recipes, setRecipes] = useState();

  // get all the recipes with the user id
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/recipe/fav/user/${userId}`)
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <main>
      {recipes
        ? recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        : ""}
    </main>
  );
}

export default Favorites;
