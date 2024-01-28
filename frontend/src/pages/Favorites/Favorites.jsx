import "./Favorites.scss";
import { useEffect, useState, useContext } from "react";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { UserContext } from "../../components/Contexts/userContext";

function Favorites() {
  const { auth } = useContext(UserContext);
  const [recipes, setRecipes] = useState();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/recipe/fav/user/${auth.id}`)
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
