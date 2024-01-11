import "./RecipeStep.scss";
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
  recipeStep: PropTypes.string.isRequired,
  stepNumber: PropTypes.number.isRequired,
};

export default RecipeSteps;
