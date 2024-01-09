import "./IngredientCard.scss";
import PropTypes from "prop-types";

function IngredientCard({ ingredientList }) {
  return (
    <>
      {ingredientList.map((ingredient) => {
        return (
          <div className="ingredientCard">
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}${ingredient.picture}`}
              alt={ingredient.name}
            />
            <p>
              {ingredient.name}
              {ingredient.quantity}
              {ingredient.unit}
            </p>
          </div>
        );
      })}
    </>
  );
}
IngredientCard.propTypes = {
  ingredientList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default IngredientCard;
