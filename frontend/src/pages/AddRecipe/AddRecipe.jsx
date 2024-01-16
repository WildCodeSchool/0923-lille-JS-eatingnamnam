/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import "./AddRecipe.scss";
import { useForm } from "react-hook-form";
import { useState } from "react";
import SelectContry from "../../components/SelectContry/SelectContry";

function AddRecipe() {
  const { register, handleSubmit } = useForm();
  const [imageUrl, setImageUrl] = useState(null);
  function onImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setImageUrl(objectUrl);
    }
  }

  // eslint-disable-next-line no-alert
  const onSubmit = (data) => alert(JSON.stringify(data));
  return (
    <form onSubmit={handleSubmit(onSubmit)} method="post" className="form">
      <h1 className="form__title">CREER TA RECETTE</h1>
      <label className="form__addTitle" htmlFor="title">
        Titre
      </label>
      <textarea
        {...register("title")}
        id="title"
        name="title"
        rows="1"
        className="form__addTitle"
        placeholder="&nbsp;Titre"
      />
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
        <label className="form__fontLabel" htmlFor="dificultySelect">
          Difficulté
          <select
            {...register("dificulty")}
            className="form__evaluation__select"
            name="dificulty"
            id="dificultySelect"
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
          >
            <option value="">-- --</option>
            <option value="low">Bas</option>
            <option value="medium">Moyen</option>
            <option value="raise">Elevé</option>
          </select>
        </label>
      </div>
      {imageUrl ? (
        // <img src={imageUrl} alt="recette" className="form__picture__on" />
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

      {/* composant ingrédiant */}
      {/* composant étapes */}
      {/* composant ustencil */}
      <SelectContry />
      <fieldset className="form__fieldset">
        <legend className="form__fieldset__titre">Régime Alimentaire</legend>
        <label htmlFor="vegetarian" className="form__fieldset__textCheck">
          <input
            value="vegetarian"
            {...register("diet")}
            type="checkbox"
            id="vegetarian"
            className="form__fieldset__Checkbox"
          />
          &nbsp;Végétarien
        </label>

        <label htmlFor="vegan" className="form__fieldset__textCheck">
          <input
            value="vegan"
            {...register("diet")}
            type="checkbox"
            id="vegan"
            className="form__fieldset__Checkbox"
          />
          &nbsp;Végan
        </label>

        <label htmlFor="gourmet" className="form__fieldset__textCheck">
          <input
            value="gourmet"
            {...register("diet")}
            type="checkbox"
            id="gourmet"
            className="form__fieldset__Checkbox"
          />
          &nbsp;Gourmand
        </label>

        <label htmlFor="light" className="form__fieldset__textCheck">
          <input
            value="light"
            {...register("diet")}
            type="checkbox"
            id="light"
            className="form__fieldset__Checkbox"
          />
          &nbsp;Light
        </label>

        <label htmlFor="balanced" className="form__fieldset__textCheck">
          <input
            value="balanced"
            {...register("diet")}
            type="checkbox"
            id="balanced"
            className="form__fieldset__Checkbox"
          />
          &nbsp;Equilibré
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
          &nbsp;Entrée
        </label>

        <label htmlFor="main_course" className="form__fieldset__textCheck">
          <input
            value="main_course"
            {...register("type")}
            type="radio"
            id="main_course"
            className="form__fieldset__Checkbox"
          />
          &nbsp;Plat
        </label>

        <label htmlFor="dessert" className="form__fieldset__textCheck">
          <input
            value="dessert"
            {...register("type")}
            type="radio"
            id="dessert"
            className="form__fieldset__Checkbox"
          />
          &nbsp;Dessert
        </label>

        <label htmlFor="aptizer" className="form__fieldset__textCheck">
          <input
            value="aptizer"
            {...register("type")}
            type="radio"
            id="aptizer"
            className="form__fieldset__Checkbox"
          />
          &nbsp;Apéritif
        </label>

        <label htmlFor="cocktail" className="form__fieldset__textCheck">
          <input
            value="cocktail"
            {...register("type")}
            type="radio"
            id="cocktail"
            className="form__fieldset__Checkbox"
          />
          &nbsp;Cocktail
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
          &nbsp;Toute saison
        </label>

        <label htmlFor="spring" className="form__fieldset__textCheck">
          <input
            value="spring"
            {...register("season")}
            type="checkbox"
            id="spring"
            className="form__fieldset__Checkbox"
          />
          &nbsp;Printemps
        </label>

        <label htmlFor="summer" className="form__fieldset__textCheck">
          <input
            value="summer"
            {...register("season")}
            type="checkbox"
            id="summer"
            className="form__fieldset__Checkbox"
          />
          &nbsp;Eté
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
          &nbsp;Hiver
        </label>
      </fieldset>

      <input type="submit" value="Partager" className="form__submit" />
    </form>
  );
}

export default AddRecipe;
