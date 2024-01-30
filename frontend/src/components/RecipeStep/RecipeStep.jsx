import "./RecipeStep.scss";
import PropTypes from "prop-types";

/**
 *
 * @param {*} param0
 * @returns display the recipe's step on the recie page
 */

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
