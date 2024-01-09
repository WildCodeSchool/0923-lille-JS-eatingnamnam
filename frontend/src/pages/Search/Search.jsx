import { useState, useEffect } from "react";
import TagCard from "../../components/TagCard/TagCard";
import "./Search.scss";

function Search() {
  const [tags, setTags] = useState();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/tag`)
      .then((response) => response.json())
      .then((data) => setTags(data))
      .catch((error) => console.error(error));
  }, []);
  const handleClick = () => {
    console.warn("test on focus");
  };
  return (
    <>
      <form className="searchBar">
        <input
          className="searchBar__form"
          type="search"
          placeholder="Rechercher une recette..."
          label="Rechercher une recette..."
          onFocus={handleClick}
        />
        <button className="searchBar__searchButton" type="submit">
          <img
            className="searchBar__searchIcon"
            src="src/assets/activeSearch.svg"
            alt="a magnifying glass icon"
          />
        </button>
      </form>
      <section className="tagCardContainer">
        {tags
          ? tags.map((tag) => <TagCard key={tag.id} tag={tag} />)
          : "loading"}
      </section>
    </>
  );
}

export default Search;
