import "./Favorites.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

function Favorites() {
  const { userId } = useParams();
  const [recipes, setRecipes] = useState();
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
