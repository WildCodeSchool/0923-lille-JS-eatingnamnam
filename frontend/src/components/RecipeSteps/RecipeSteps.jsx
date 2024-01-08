import "./RecipeSteps.scss";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function RecipeSteps({ recipe }) {
  console.warn("recipe inside recipe step:", recipe);
  const [steps, setSteps] = useState();

  useEffect(() => {
    fetch(`src/recipe.json`)
      .then((response) => response.json())
      .then((data) => setSteps(data))
      .catch((error) => console.error(error));
  }, []);
  /*   const recipeSteps = steps[0].step; */
  /*  console.warn("recipeSteps:", recipeSteps); */
  return (
    <>
      <h1>hello recipe steps</h1>;
      {steps
        ? console.warn("steps:", steps, "steps[0]step:", steps[0].step)
        : ""}
      {/* {recipeSteps.map((step) => (
        <p>{step}</p>
      ))} */}
    </>
  );
}

RecipeSteps.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeSteps;
