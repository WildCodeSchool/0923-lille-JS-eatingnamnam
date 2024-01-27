/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import "./AddRecipe.scss";
import { useForm } from "react-hook-form";
import { useState, useEffect, useRef } from "react";
import SelectCountry from "../../components/SelectCountry/SelectCountry";
import AddIgredients from "../../components/AddIngredients/AddIngredients";

function AddRecipe() {
  const [imageUrl, setImageUrl] = useState(null);
  const [numberStep, setNumberStep] = useState(1);
  const [description, setDescription] = useState();
  const [stepsArr, setStepsArr] = useState([]);
  const [info, setInfo] = useState();
  const [country, setCountry] = useState();

  const [ingredientArr, setIngredientArr] = useState([]);

  const titleRef = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm();

  const handleSubmitForm = () => {
    const date = new Date().toLocaleDateString();
    try {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user/1/add/recipe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: titleRef.current.value,
          country,
          info,
          stepsArr,
          ingredientArr,
          description,
          date,
        }),
      });
    } catch (error) {
      console.error(error);
    }
  };
  const onSubmitInfo = (mySubmitedRecipe) => {
    // console.log(info);
    setInfo(mySubmitedRecipe);
  };

  const onSubmitStep = (data, event) => {
    event.preventDefault();
    setNumberStep(numberStep + 1);
    setDescription(data.stepDescription);
    const stepObj = { id: numberStep, desc: data.stepDescription };
    setStepsArr([...stepsArr, stepObj]);
  };
  useEffect(() => {
    if (isSubmitSuccessful);
    reset();
  }, [isSubmitSuccessful, reset]);

  function onImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setImageUrl(objectUrl);
    }
  }
  return (
    <main className="addRecipe_page">
      <h1 className="titleAddRecipe">CREER TA RECETTE</h1>
      <section>
        <label className="addTitle" htmlFor="title">
          Titre
        </label>
        <textarea
          id="title"
          name="title"
          ref={titleRef}
          rows="1"
          className="addTitle"
          placeholder="&nbsp;Titre"
        />
        <SelectCountry setCountry={setCountry} className="selectCountry" />
        <form
          onSubmit={handleSubmit(onSubmitInfo)}
          method="post"
          className="form"
        >
          <div className="form__evaluation">
            <label className="form__fontLabel" htmlFor="time">
              Temps
              <input
                {...register("time")}
                className="form__evaluation__select"
                type="time"
                id="time"
                name="time"
                min="00:01"
                max="24:00"
                required
              />
            </label>
            <label className="form__fontLabel" htmlFor="difficultySelect">
              Difficulté
              <select
                {...register("difficulty")}
                className="form__evaluation__select"
                name="difficulty"
                id="difficultySelect"
                defaultValue=""
              >
                <option value="">-- --</option>
                <option value="easy">Facile</option>
                <option value="medium">Moyen</option>
                <option value="difficult">Difficile</option>
              </select>
            </label>

            <label htmlFor="priceSelect" className="form__fontLabel">
              Prix
              <select
                {...register("price")}
                className="form__evaluation__select"
                name="price"
                id="priceSelect"
                defaultValue=""
              >
                <option value="">-- --</option>
                <option value="low">Bas</option>
                <option value="medium">Moyen</option>
                <option value="raise">Elevé</option>
              </select>
            </label>
          </div>
          {imageUrl ? (
            <label
              htmlFor="picture"
              className="form__picture__on"
              style={{ backgroundImage: `url( "${imageUrl}"` }}
            >
              <input
                {...register("picture")}
                type="file"
                id="picture"
                name="picture"
                accept="image/png, image/jpeg"
                className="form__picture__button"
                onChange={onImageChange}
              />
            </label>
          ) : (
            <label htmlFor="picture" className="form__picture">
              Ajouter une photo <span>&nbsp;+</span>
              <input
                {...register("picture")}
                type="file"
                id="picture"
                name="picture"
                accept="image/png, image/jpeg"
                className="form__picture__button"
                onChange={onImageChange}
              />
            </label>
          )}
          <fieldset className="form__fieldset">
            <legend className="form__fieldset__titre">
              Régime Alimentaire
            </legend>
            <label htmlFor="vegetarian" className="form__fieldset__textCheck">
              <input
                value="vegetarian"
                {...register("diet")}
                type="checkbox"
                id="vegetarian"
                className="form__fieldset__Checkbox"
              />
              Végétarien
            </label>

            <label htmlFor="vegan" className="form__fieldset__textCheck">
              <input
                value="vegan"
                {...register("diet")}
                type="checkbox"
                id="vegan"
                className="form__fieldset__Checkbox"
              />
              Végan
            </label>

            <label htmlFor="gourmet" className="form__fieldset__textCheck">
              <input
                value="gourmet"
                {...register("diet")}
                type="checkbox"
                id="gourmet"
                className="form__fieldset__Checkbox"
              />
              Gourmand
            </label>

            <label htmlFor="light" className="form__fieldset__textCheck">
              <input
                value="light"
                {...register("diet")}
                type="checkbox"
                id="light"
                className="form__fieldset__Checkbox"
              />
              Light
            </label>

            <label htmlFor="balanced" className="form__fieldset__textCheck">
              <input
                value="balanced"
                {...register("diet")}
                type="checkbox"
                id="balanced"
                className="form__fieldset__Checkbox"
              />
              Equilibré
            </label>
          </fieldset>
          <fieldset className="form__fieldset">
            <legend className="form__fieldset__titre">Type</legend>
            <label htmlFor="starter" className="form__fieldset__textCheck">
              <input
                value="starter"
                {...register("type")}
                type="radio"
                id="starter "
                className="form__fieldset__Checkbox"
              />
              Entrée
            </label>

            <label htmlFor="main_course" className="form__fieldset__textCheck">
              <input
                value="main_course"
                {...register("type")}
                type="radio"
                id="main_course"
                className="form__fieldset__Checkbox"
              />
              Plat
            </label>

            <label htmlFor="dessert" className="form__fieldset__textCheck">
              <input
                value="dessert"
                {...register("type")}
                type="radio"
                id="dessert"
                className="form__fieldset__Checkbox"
              />
              Dessert
            </label>

            <label htmlFor="aptizer" className="form__fieldset__textCheck">
              <input
                value="aptizer"
                {...register("type")}
                type="radio"
                id="aptizer"
                className="form__fieldset__Checkbox"
              />
              Apéritif
            </label>

            <label htmlFor="cocktail" className="form__fieldset__textCheck">
              <input
                value="cocktail"
                {...register("type")}
                type="radio"
                id="cocktail"
                className="form__fieldset__Checkbox"
              />
              Cocktail
            </label>
          </fieldset>
          <fieldset className="form__fieldset">
            <legend className="form__fieldset__titre">Saison</legend>
            <label className="form__fieldset__textCheck" htmlFor="allSeason">
              <input
                value="allSeason"
                {...register("season")}
                type="checkbox"
                id="allSeason"
                className="form__fieldset__Checkbox"
              />
              Toute saison
            </label>

            <label htmlFor="spring" className="form__fieldset__textCheck">
              <input
                value="spring"
                {...register("season")}
                type="checkbox"
                id="spring"
                className="form__fieldset__Checkbox"
              />
              Printemps
            </label>

            <label htmlFor="summer" className="form__fieldset__textCheck">
              <input
                value="summer"
                {...register("season")}
                type="checkbox"
                id="summer"
                className="form__fieldset__Checkbox"
              />
              Été
            </label>

            <label htmlFor="automn" className="form__fieldset__textCheck">
              <input
                value="automn"
                {...register("season")}
                type="checkbox"
                id="automn"
                className="form__fieldset__Checkbox"
              />
              &nbsp;Automne
            </label>

            <label htmlFor="winter" className="form__fieldset__textCheck">
              <input
                value="winter"
                {...register("season")}
                type="checkbox"
                id="winter"
                className="form__fieldset__Checkbox"
              />
              Hiver
            </label>
          </fieldset>
          <input type="submit" value="Suivant" className="form__submit" />
        </form>
      </section>

      <section className="step">
        <h2 className="step__title">Préparation</h2>
        <ul className="step__liste">
          {stepsArr.map((step) => (
            <li key={step.id} className="step__liste__texte">
              <span>
                Étape {step.id}:<br />
              </span>
              {step.desc}
            </li>
          ))}
        </ul>
        <h3 className="step__titleNumber">Étape {numberStep}: </h3>
        <form className="step__form" onSubmit={handleSubmit(onSubmitStep)}>
          <textarea
            className="step__form__addTexte"
            name="step description"
            rows="3"
            defaultValue=""
            placeholder="Décrivez l'étape"
            {...register("stepDescription")}
          />

          <input
            type="submit"
            value="Ajouter une étape"
            className="step__form__button"
          />
        </form>
      </section>
      <AddIgredients
        setIngredientArr={setIngredientArr}
        ingredientArr={ingredientArr}
      />
      <button type="button" onClick={handleSubmitForm} className="buttonFetch">
        click
      </button>
    </main>
  );
}

export default AddRecipe;
