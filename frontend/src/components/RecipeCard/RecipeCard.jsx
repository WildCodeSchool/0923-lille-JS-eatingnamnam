import "./RecipeCard.scss";
import PropTypes from "prop-types";
import StarBar from "../StarBar/StarBar";
import AddFavorite from "../AddFavorite/AddFavorite";

function RecipeCard({ recipe }) {
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
        <StarBar className="card_info__stars" recipe={recipe.id} />
      </article>
    </section>
  );
}
RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeCard;
