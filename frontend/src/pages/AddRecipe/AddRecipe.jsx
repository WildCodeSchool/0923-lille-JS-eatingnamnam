/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import "./AddRecipe.scss";
import { useForm } from "react-hook-form";
import SelectContry from "../../components/SelectContry/SelectContry";

function AddRecipe() {
  const { register, handleSubmit } = useForm();
  // eslint-disable-next-line no-alert
  const onSubmit = (data) => alert(JSON.stringify(data));
  return (
    <form onSubmit={handleSubmit(onSubmit)} method="post" className="form">
      <h1 className="form__title">CREE TA RECETTE</h1>
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
          Dificulter
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
      <label htmlFor="picture" className="form__picture">
        Ajouter une photo
        <input
          {...register("picture")}
          type="file"
          id="picture"
          name="picture"
          accept="image/png, image/jpeg"
          className="form__picture__button"
        />
      </label>

      {/* composant ingrédiant */}
      {/* composant étapes */}
      {/* composant ustencil */}
      <SelectContry />
      <fieldset>
        <legend>Régime Alimentaire</legend>
        <label htmlFor="vegetarian">
          <input
            value="vegetarian"
            {...register("diet")}
            type="checkbox"
            id="vegetarian"
          />
          Végétarien
        </label>

        <input value="vegan" {...register("diet")} type="checkbox" id="vegan" />
        <label htmlFor="vegan">Végan</label>

        <label htmlFor="gourmet">
          <input
            value="gourmet"
            {...register("diet")}
            type="checkbox"
            id="gourmet"
          />
          Gourmand
        </label>

        <label htmlFor="light">
          <input
            value="light"
            {...register("diet")}
            type="checkbox"
            id="light"
          />
          Light
        </label>

        <label htmlFor="balanced">
          <input
            value="balanced"
            {...register("diet")}
            type="checkbox"
            id="balanced"
          />
          Equilibré
        </label>
      </fieldset>

      <fieldset>
        <legend>Type</legend>
        <label htmlFor="starter ">
          <input
            value="starter"
            {...register("type")}
            type="radio"
            id="starter "
          />
          Entrée
        </label>

        <label htmlFor="main_course">
          <input
            value="main_course"
            {...register("type")}
            type="radio"
            id="main_course"
          />
          Plat
        </label>

        <label htmlFor="dessert">
          <input
            value="dessert"
            {...register("type")}
            type="radio"
            id="dessert"
          />
          Dessert
        </label>

        <label htmlFor="aptizer">
          <input
            value="aptizer"
            {...register("type")}
            type="radio"
            id="aptizer"
          />
          Apéritif
        </label>

        <label htmlFor="cocktail">
          <input
            value="cocktail"
            {...register("type")}
            type="radio"
            id="cocktail"
          />
          Cocktail
        </label>
      </fieldset>

      <fieldset>
        <legend>Saison</legend>
        <label htmlFor="allSeason">
          <input
            value="allSeason"
            {...register("season")}
            type="checkbox"
            id="allSeason"
          />
          Toute saison
        </label>

        <label htmlFor="spring">
          <input
            value="spring"
            {...register("season")}
            type="checkbox"
            id="spring"
          />
          Primtemps
        </label>

        <label htmlFor="summer">
          <input
            value="summer"
            {...register("season")}
            type="checkbox"
            id="summer"
          />
          Eté
        </label>

        <label htmlFor="automn">
          <input
            value="automn"
            {...register("season")}
            type="checkbox"
            id="automn"
          />
          Automne
        </label>

        <label htmlFor="winter">
          <input
            value="winter"
            {...register("season")}
            type="checkbox"
            id="winter"
          />
          Hiver
        </label>
      </fieldset>

      <input type="submit" value="Partager" />
    </form>
  );
}

export default AddRecipe;
