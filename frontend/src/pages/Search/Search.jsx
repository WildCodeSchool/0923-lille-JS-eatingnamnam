/* eslint-disable react/jsx-props-no-spreading */
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import TagCard from "../../components/TagCard/TagCard";
import "./Search.scss";

function Search() {
  const [tags, setTags] = useState();
  const [stepCount, setStepCount] = useState(1);
  const [stepsArr, setMyData] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/tag`)
      .then((response) => response.json())
      .then((data) => setTags(data))
      .catch((error) => console.error(error));
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault();
    setStepCount(stepCount + 1);
    const stepObj = { id: stepCount, desc: data.stepDescription };
    if (!stepsArr) {
      setMyData(stepsArr);
    } else {
      setMyData([...stepsArr, stepObj]);
    }
    console.warn(stepsArr);
  };
  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      {stepsArr.map((step) => (
        <p key={step.id}>
          etape{step.id}: {step.desc}
        </p>
      ))}
      <h1>step {stepCount} </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="step description"
          placeholder="décrivez l'étape"
          {...register("stepDescription")}
        />

        <input type="submit" />
      </form>
      <form className="searchBar">
        <input
          className="searchBar__form"
          type="search"
          placeholder="Rechercher une recette..."
          label="Rechercher une recette..."
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
      </section>{" "}
    </>
  );
}

export default Search;
