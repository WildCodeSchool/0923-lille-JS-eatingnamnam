/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import PropTypes, { shape } from "prop-types";
import "./AddIngredients.scss";

function AddIgredients({ ingredientArr, setIngredientArr }) {
  const [ingredientsBdd, setIngredientsBdd] = useState();
  //   const [ingredientArr, setIngredientArr] = useState([]);

  const { register, handleSubmit } = useForm();

  const onSubmit = (ingredientData, event) => {
    event.preventDefault();
    setIngredientArr([...ingredientArr, ingredientData]);
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/ingredients`)
      .then((response) => response.json())
      .then((data) => setIngredientsBdd(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <section className="addIngredients">
      <h5 className="addIngredients__title">Ajout d'ingrédients</h5>
      <form onSubmit={handleSubmit(onSubmit)} className="addIngredients__form">
        <label
          htmlFor="ingredient"
          className="addIngredients__form__ingredient"
        >
          Ingredient
          <select
            id="ingredient"
            name="ingredientName"
            {...register("ingredientName")}
            className="addIngredients__form__ingredient__select"
          >
            <option defaultValue="">-- -- </option>
            {ingredientsBdd &&
              ingredientsBdd.map((ingredient) => (
                <option key={ingredient.id} value={ingredient.name}>
                  {ingredient.name}
                </option>
              ))}
          </select>
        </label>
        <label htmlFor="quantity" className="addIngredients__form__quantity">
          Quantitée
          <input
            type="number"
            id="quantity"
            name="quantity"
            {...register("quantity")}
            className="addIngredients__form__quantity__input"
          />
        </label>
        <label htmlFor="unit" className="addIngredients__form__unit">
          Unité
          <select
            id="unit"
            name="unit"
            {...register("unit")}
            className="addIngredients__form__unit__select"
          >
            <option defaultValue="">-- -- </option>
            <option value="pièce(s)">Pièce(s)</option>
            <option value="g">Grammes</option>
            <option value="Kg">Kg</option>
            <option value="L">Litre</option>
            <option value="cl">cl</option>
            <option value="cuillère(s) à soupe">Cuillère(s) à soupe</option>
            <option value="cuillère(s) à café">Cuillère(s) à café</option>
            <option value="pincée(s)">Pincée(s)</option>
          </select>
        </label>
        <input
          type="submit"
          value="Ajouter un ingrédient"
          className="addIngredients__form__button"
        />
      </form>
      <aside className="addIngredients__List">
        {ingredientArr &&
          ingredientArr.map((ingredient) => (
            <div className="addIngredients__List__element">
              <h6 className="addIngredients__List__element__title">
                {ingredient.ingredientName}{" "}
              </h6>
              <p className="addIngredients__List__element__quantity">
                {ingredient.quantity} {ingredient.unit}
              </p>
            </div>
          ))}
      </aside>
    </section>
  );
}
AddIgredients.propTypes = {
  setIngredientArr: PropTypes.func.isRequired,
  ingredientArr: PropTypes.arrayOf(
    shape({
      ingredientName: PropTypes.string.isRequired,
      quantity: PropTypes.string.isRequired,
      unit: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AddIgredients;
