import "./SearchRecipeCard.scss";
import PropTypes from "prop-types";
import StarBar from "../StarBar/StarBar";

function SearchRecipeCard({ recipe }) {
  return (
    <section className="SearchRecipeCard">
      <img
        className="SearchRecipeCard__logo"
        src={`${import.meta.env.VITE_BACKEND_URL}${recipe.picture}`}
        alt="une recette de cuisine"
      />
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
