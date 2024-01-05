import "./RecipeCardPage.scss";
import PropTypes from "prop-types";
import StarBar from "../StarBar/StarBar";
import AddFavorite from "../AddFavorite/AddFavorite";

function RecipeCardPage({ recipe }) {
  return (
    <section className="RecipeCardPage">
      <article
        className="RecipeCardPage__logo"
        style={{ backgroundImage: `url("${recipe.picture}")` }}
      >
        <AddFavorite className="RecipeCardPage__logo__favorite" />
        <div className="RecipeCardPage__logo__diet">
          <img
            className="RecipeCardPage__logo__diet__vegan"
            src="/src/assets/Logo-vegan.png"
            alt="this recipe is vegan"
          />
        </div>
      </article>
      <article className="RecipeCardPage__info">
        <p className="RecipeCardPage_info__p">"nb commentaire(s)"</p>
        <StarBar className="RecipeCardPage_info__stars" />
      </article>
      <h1 className="RecipeCardPage__info__title">{recipe.title}</h1>
    </section>
  );
}
RecipeCardPage.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeCardPage;
