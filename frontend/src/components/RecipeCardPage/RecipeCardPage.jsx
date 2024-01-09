import "./RecipeCardPage.scss";
import PropTypes from "prop-types";
import StarBar from "../StarBar/StarBar";
import AddFavorite from "../AddFavorite/AddFavorite";

function RecipeCardPage({ recipe }) {
  return (
    <section className="RecipeCardPage">
      <section
        className="RecipeCardPage__header"
        style={{
          backgroundImage: `url("${import.meta.env.VITE_BACKEND_URL}${
            recipe.picture
          }")`,
        }}
      >
        <AddFavorite className="RecipeCardPage__header__favorite" />
        <div className="RecipeCardPage__header__diet">
          <img
            className="RecipeCardPage__header__diet__vegan"
            src="/src/assets/Logo-vegan.png"
            alt="this recipe is vegan"
          />
        </div>
      </section>
      <section className="RecipeCardPage__info">
        <p className="RecipeCardPage_info__p">"nb commentaire(s)"</p>
        <StarBar className="RecipeCardPage_info__stars" recipe={recipe.id} />
      </section>
      <h1 className="RecipeCardPage__info__title">{recipe.title}</h1>
    </section>
  );
}
RecipeCardPage.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeCardPage;
