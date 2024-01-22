/* eslint-disable react/jsx-props-no-spreading */
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import TagCard from "../../components/TagCard/TagCard";
import "./Search.scss";

function Search() {
  const [tags, setTags] = useState();
  const [numberStep, setNumberStep] = useState(10);
  const [description, setDescription] = useState();
  const [stepsArr, setStepsArr] = useState([]);

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
  // Example POST method implementation:
  async function postData(url = "", data = { description, numberStep }) {
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({
        data,
      }), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  const onSubmit = (data, event) => {
    event.preventDefault();
    setNumberStep(numberStep + 1);
    setDescription(data.stepDescription);
    const stepObj = { id: numberStep, desc: data.stepDescription };
    setStepsArr([...stepsArr, stepObj]);
    postData(`${import.meta.env.VITE_BACKEND_URL}/api/add/steps`, {}).then(
      (res) => {
        console.warn(res); // JSON data parsed by `data.json()` call
      }
    );
  };

  useEffect(() => {
    if (isSubmitSuccessful);
    reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      {stepsArr.map((step) => (
        <p key={step.id}>
          etape{step.id}: {step.desc}
        </p>
      ))}
      <h1>step {numberStep} </h1>
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
