import "./Search.scss";
import { useState, useEffect } from "react";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [recipes, setRecipes] = useState("");
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/recipe`)
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error(error));
  }, []);
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <main className="page">
      <search className="searchBar">
        <input
          onChange={handleChange}
          list="searchedRecipe"
          value={searchInput}
          className="searchBar__form"
          type="search"
          placeholder="Rechercher une recette..."
          label="Rechercher une recette..."
        />
      </search>
      <section id="searchedRecipe" className="cardContainer">
        {recipes &&
          recipes.map((recipe) =>
            recipe.title.toLowerCase().includes(searchInput) ? (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ) : (
              ""
            )
          )}
      </section>
    </main>
  );
}

export default Search;
