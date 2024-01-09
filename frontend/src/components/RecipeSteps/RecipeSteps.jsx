import "./RecipeSteps.scss";
import PropTypes from "prop-types";

function RecipeSteps({ recipeStep, stepNumber }) {
  return (
    <section className="stepCard">
      <h1 className="stepCard__title">Etape {stepNumber}:</h1>
      <p className="stepCard__description">{recipeStep}</p>
    </section>
  );
}

RecipeSteps.propTypes = {
  recipeStep: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
  stepNumber: PropTypes.shape({
    number_step: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeSteps;
