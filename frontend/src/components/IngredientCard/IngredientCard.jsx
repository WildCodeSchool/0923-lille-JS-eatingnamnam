import "./IngredientCard.scss";
import PropTypes from "prop-types";

function IngredientCard({ ingredient }) {
  return (
    <div className="ingredientCard">
      <img
        className="ingredientCard__img"
        src={`${import.meta.env.VITE_BACKEND_URL}${ingredient.picture}`}
        alt={ingredient.name}
      />
      <article className="ingredientCard__info">
        <p className="ingredientCard__info__quantity">
          {ingredient.quantity} {ingredient.unit}
        </p>
        <p className="ingredientCard__info__name">{ingredient.name}</p>
      </article>
    </div>
  );
}
IngredientCard.propTypes = {
  ingredient: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    quantity: PropTypes.number,
    unit: PropTypes.string,
  }).isRequired,
};

export default IngredientCard;
