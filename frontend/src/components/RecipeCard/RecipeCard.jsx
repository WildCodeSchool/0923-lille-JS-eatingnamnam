import "./RecipeCard.scss";
import PropTypes from "prop-types";

import StarBar from "../StarBar/StarBar";
import AddFavorite from "../AddFavorite/AddFavorite";

function RecipeCard({ recipe }) {
  /*   const [title, picture ] = recipe; */
  /*  console.log("picture:", img); */
  return (
    <section className="card">
      <article
        className="card__logo"
        style={{ backgroundImage: `url("${recipe.picture}")` }}
      >
        <AddFavorite className="card__logo__favorite" />
        <div className="card__logo__diet">
          <img
            className="card__logo__diet__vegan"
            src="/src/assets/Logo-vegan.png"
            alt="this recipe is vegan"
          />
        </div>
      </article>
      <article className="card__info">
        <h1 className="card__info__title">{recipe.title}</h1>
        <StarBar className="card_info__stars" />
      </article>
    </section>
  );
}
RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    // Add other expected properties for the recipe object
    // Example: difficulty, time, ingredients, ustensils, grade, comments, etc.
  }).isRequired,
};

export default RecipeCard;
