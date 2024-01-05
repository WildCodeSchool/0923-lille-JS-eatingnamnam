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
  return (
    <>
      <h1 className="helloSearch">HELLO SEARCH PAGE</h1>;
      <section className="tagCardContainer">
        <h2 className="title">TAG CONTAINER</h2>
        {tags
          ? tags.map((tag) => <TagCard key={tag.id} tag={tag} />)
          : "loading"}
      </section>
    </>
  );
}

export default Search;
