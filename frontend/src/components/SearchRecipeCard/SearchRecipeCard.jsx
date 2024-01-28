import "./SearchRecipeCard.scss";
import { useContext } from "react";
import PropTypes from "prop-types";
import StarBar from "../StarBar/StarBar";
import AddFavorite from "../AddFavorite/AddFavorite";
import { UserContext } from "../Contexts/userContext";

function SearchRecipeCard({ recipe }) {
  const { favorites } = useContext(UserContext);
  return (
    <section className="SearchRecipeCard">
      <article
        className="SearchRecipeCard__logo"
        style={{
          backgroundImage: `url("${import.meta.env.VITE_BACKEND_URL}${
            recipe.picture
          }")`,
        }}
      >
        {favorites &&
          favorites.map((favorite) =>
            favorite.recipe_id === recipe.id ? (
              <AddFavorite
                key={favorite.id}
                recipe={recipe}
                className="card__logo__favorite"
              />
            ) : (
              ""
            )
          )}
        {/* <AddFavorite className="SearchRecipeCard__logo__favorite" /> */}
        <div className="SearchRecipeCard__logo__diet">
          <img
            className="SearchRecipeCard__logo__diet__vegan"
            src="/src/assets/Logo-vegan.png"
            alt="this recipe is vegan"
          />
        </div>
      </article>
      <article className="SearchRecipeCard__info">
        <section className="SearchRecipeCard__info__name">
          <h1 className="SearchRecipeCard__info__title">{recipe.title}</h1>
          <StarBar className="SearchRecipeCard_info__stars" id={recipe.id} />
        </section>
        <section className="SearchRecipeCard__info__stats">
          <div className="SearchRecipeCard__info__stats__div">
            <img
              className="SearchRecipeCard__info__stats__img"
              src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/time.svg`}
              alt="logo time"
            />
            <p className="SearchRecipeCard__info__p">{recipe.time}</p>
          </div>
          <div className="SearchRecipeCard__info__stats__div">
            <img
              className="SearchRecipeCard__info__stats__img"
              src={`${
                import.meta.env.VITE_BACKEND_URL
              }/assets/images/toque.svg`}
              alt="logo toque"
            />
            <p className="SearchRecipeCard__info__p">{recipe.difficulty}</p>
          </div>
          <div className="SearchRecipeCard__info__stats__div">
            {recipe.price === 1 && (
              <img
                className="SearchRecipeCard__info__stats__img"
                src={`${
                  import.meta.env.VITE_BACKEND_URL
                }/assets/images/euro.svg`}
                alt="logo euro"
              />
            )}
            {recipe.price === 2 && (
              <>
                <img
                  className="SearchRecipeCard__info__stats__img"
                  src={`${
                    import.meta.env.VITE_BACKEND_URL
                  }/assets/images/euro.svg`}
                  alt="logo euro"
                />
                <img
                  className="SearchRecipeCard__info__stats__img"
                  src={`${
                    import.meta.env.VITE_BACKEND_URL
                  }/assets/images/euro.svg`}
                  alt="logo euro"
                />
              </>
            )}
            {recipe.price === 3 && (
              <>
                <img
                  className="SearchRecipeCard__info__stats__img"
                  src={`${
                    import.meta.env.VITE_BACKEND_URL
                  }/assets/images/euro.svg`}
                  alt="logo euro"
                />{" "}
                <img
                  className="SearchRecipeCard__info__stats__img"
                  src={`${
                    import.meta.env.VITE_BACKEND_URL
                  }/assets/images/euro.svg`}
                  alt="logo euro"
                />
                <img
                  className="SearchRecipeCard__info__stats__img"
                  src={`${
                    import.meta.env.VITE_BACKEND_URL
                  }/assets/images/euro.svg`}
                  alt="logo euro"
                />
              </>
            )}
          </div>
        </section>
      </article>
    </section>
  );
}
SearchRecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    difficulty: PropTypes.string.isRequired,
  }).isRequired,
};

export default SearchRecipeCard;
