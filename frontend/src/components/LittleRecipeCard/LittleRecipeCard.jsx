import "./LittleRecipeCard.scss";
import PropTypes from "prop-types";
import StarBar from "../StarBar/StarBar";
import AddFavorite from "../AddFavorite/AddFavorite";

function LittleRecipeCard({ recipes }) {
  return (
    <section className="LittleRecipeCardcard">
      <article
        className="LittleRecipeCardcard__logo"
        style={{
          backgroundImage: `url("${import.meta.env.VITE_BACKEND_URL}${
            recipes.picture
          }")`,
        }}
      >
        <AddFavorite className="LittleRecipeCardcard__logo__favorite" />
      </article>

      <article className="LittleRecipeCardcard__info">
        <section className="LittleRecipeCardcard__info__name">
          <h1 className="LittleRecipeCardcard__info__title">{recipes.title}</h1>

          <StarBar
            className="LittleRecipeCardcard_info__stars"
            id={recipes.id}
          />
        </section>

        <section className="LittleRecipeCardcard__info__stats">
          <div className="LittleRecipeCardcard__info__stats__div">
            <img
              className="LittleRecipeCardcard__info__stats__img"
              src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/time.svg`}
              alt="logo time"
            />

            <p className="LittleRecipeCardcard__info__p">{recipes.time}</p>
          </div>
          <div className="LittleRecipeCardcard__info__stats__div">
            <img
              className="LittleRecipeCardcard__info__stats__img"
              src={`${
                import.meta.env.VITE_BACKEND_URL
              }/assets/images/toque.svg`}
              alt="logo toque"
            />
            <p className="LittleRecipeCardcard__info__p">
              {recipes.difficulty}
            </p>
          </div>
          <div className="LittleRecipeCardcard__info__stats__div littleCard__price">
            {recipes.price === 1 && (
              <img
                className="LittleRecipeCardcard__info__stats__img"
                src={`${
                  import.meta.env.VITE_BACKEND_URL
                }/assets/images/euro.svg`}
                alt="logo euro"
              />
            )}
            {recipes.price === 2 && (
              <>
                <img
                  className="LittleRecipeCardcard__info__stats__img"
                  src={`${
                    import.meta.env.VITE_BACKEND_URL
                  }/assets/images/euro.svg`}
                  alt="logo euro"
                />
                <img
                  className="LittleRecipeCardcard__info__stats__img"
                  src={`${
                    import.meta.env.VITE_BACKEND_URL
                  }/assets/images/euro.svg`}
                  alt="logo euro"
                />
              </>
            )}
            {recipes.price === 3 && (
              <>
                <img
                  className="LittleRecipeCardcard__info__stats__img"
                  src={`${
                    import.meta.env.VITE_BACKEND_URL
                  }/assets/images/euro.svg`}
                  alt="logo euro"
                />{" "}
                <img
                  className="LittleRecipeCardcard__info__stats__img"
                  src={`${
                    import.meta.env.VITE_BACKEND_URL
                  }/assets/images/euro.svg`}
                  alt="logo euro"
                />
                <img
                  className="LittleRecipeCardcard__info__stats__img"
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
LittleRecipeCard.propTypes = {
  recipes: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    difficulty: PropTypes.string.isRequired,
  }).isRequired,
};

export default LittleRecipeCard;
