import "./SwiperRecipeCard.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import PropTypes from "prop-types";
import StarBar from "../StarBar/StarBar";
import AddFavorite from "../AddFavorite/AddFavorite";
import { NavContext } from "../Contexts/navBarContext";
import { UserContext } from "../Contexts/userContext";

function SwiperRecipeCard({ recipe }) {
  const { favorites } = useContext(UserContext);
  const { setActiveButton, setRecipeID } = useContext(NavContext);
  const handleClick = () => {
    setRecipeID(recipe.id);
    setActiveButton("recipe");
  };
  return (
    <Link to={`/recipe/${recipe.id}`} onClick={handleClick}>
      <section className="swiperCard">
        <article
          className="swiperCard__logo"
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
          <div className="swiperCard__logo__diet">
            <img
              className="swiperCard__logo__diet__vegan"
              src="/src/assets/Logo-vegan.png"
              alt="this recipe is vegan"
            />
          </div>
        </article>

        <section className="testSection">
          <article className="swiperCard__info">
            <h1 className="swiperCard__info__title">{recipe.title}</h1>
            <StarBar className="swiperCard_info__stars" id={recipe.id} />
          </article>

          <section className="swiperCard__stats">
            <div className="swiperCard__stats__div">
              <img
                className="swiperCard__stats__img"
                src={`${
                  import.meta.env.VITE_BACKEND_URL
                }/assets/images/time.svg`}
                alt="logo time"
              />

              <p className="swiperCard__p">{recipe.time}</p>
            </div>
            <div className="swiperCard__stats__div">
              <img
                className="swiperCard__stats__img"
                src={`${
                  import.meta.env.VITE_BACKEND_URL
                }/assets/images/toque.svg`}
                alt="logo toque"
              />
              <p className="swiperCard__p">{recipe.difficulty}</p>
            </div>
            <div className="swiperCard__stats__div littleCard__price">
              {recipe.price === 1 && (
                <img
                  className="swiperCard__stats__img"
                  src={`${
                    import.meta.env.VITE_BACKEND_URL
                  }/assets/images/euro.svg`}
                  alt="logo euro"
                />
              )}
              {recipe.price === 2 && (
                <>
                  <img
                    className="swiperCard__stats__img"
                    src={`${
                      import.meta.env.VITE_BACKEND_URL
                    }/assets/images/euro.svg`}
                    alt="logo euro"
                  />
                  <img
                    className="swiperCard__stats__img"
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
                    className="swiperCard__stats__img"
                    src={`${
                      import.meta.env.VITE_BACKEND_URL
                    }/assets/images/euro.svg`}
                    alt="logo euro"
                  />{" "}
                  <img
                    className="swiperCard__stats__img"
                    src={`${
                      import.meta.env.VITE_BACKEND_URL
                    }/assets/images/euro.svg`}
                    alt="logo euro"
                  />
                  <img
                    className="swiperCard__stats__img"
                    src={`${
                      import.meta.env.VITE_BACKEND_URL
                    }/assets/images/euro.svg`}
                    alt="logo euro"
                  />
                </>
              )}
            </div>
          </section>
        </section>
      </section>
    </Link>
  );
}
SwiperRecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    difficulty: PropTypes.string.isRequired,
  }).isRequired,
};

export default SwiperRecipeCard;
