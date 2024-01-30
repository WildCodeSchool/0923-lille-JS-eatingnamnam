import "./RecipeCard.scss";
import PropTypes from "prop-types";
import StarBar from "../StarBar/StarBar";

/**
 *
 * @param {recipe: object} props - the recipe card properties
 * @returns The rendered Recipe Card component  with a star bar and title, author, servings, cooking time, ingredients list
 */

function RecipeCard({ recipe }) {
  return (
    <section className="card">
      <img
        src={`${import.meta.env.VITE_BACKEND_URL}${recipe.picture}`}
        alt="une recette de cuisine"
        className="card__logo"
      />
      <article className="card__info">
        <section className="card__info__name">
          <h1 className="card__info__title">{recipe.title}</h1>
          <StarBar className="card_info__stars" id={recipe.id} />
        </section>
        <section className="card__info__stats">
          <div className="card__info__stats__div">
            <img
              className="card__info__stats__img"
              src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/time.svg`}
              alt="logo time"
            />
            <p className="card__info__p">{recipe.time}</p>
          </div>
          <div className="card__info__stats__div">
            <img
              className="card__info__stats__img"
              src={`${
                import.meta.env.VITE_BACKEND_URL
              }/assets/images/toque.svg`}
              alt="logo toque"
            />
            <p className="card__info__p">{recipe.difficulty}</p>
          </div>
          <div className="card__info__stats__div">
            {recipe.price === 1 && (
              <img
                className="card__info__stats__img"
                src={`${
                  import.meta.env.VITE_BACKEND_URL
                }/assets/images/euro.svg`}
                alt="logo euro"
              />
            )}
            {recipe.price === 2 && (
              <>
                <img
                  className="card__info__stats__img"
                  src={`${
                    import.meta.env.VITE_BACKEND_URL
                  }/assets/images/euro.svg`}
                  alt="logo euro"
                />
                <img
                  className="card__info__stats__img"
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
                  className="card__info__stats__img"
                  src={`${
                    import.meta.env.VITE_BACKEND_URL
                  }/assets/images/euro.svg`}
                  alt="logo euro"
                />{" "}
                <img
                  className="card__info__stats__img"
                  src={`${
                    import.meta.env.VITE_BACKEND_URL
                  }/assets/images/euro.svg`}
                  alt="logo euro"
                />
                <img
                  className="card__info__stats__img"
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
RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    difficulty: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeCard;
