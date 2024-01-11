import "./SwiperRecipeCard.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import PropTypes from "prop-types";
import StarBar from "../StarBar/StarBar";
import AddFavorite from "../AddFavorite/AddFavorite";
import { NavContext } from "../Contexts/navBarContext";

function SwiperRecipeCard({ recipe }) {
  const { setActiveButton, setRecipeID } = useContext(NavContext);
  const handleClick = () => {
    setRecipeID(recipe.id);
    setActiveButton("recipe");
  };
  return (
    <Link to="/recipe" onClick={handleClick}>
      <section className="swiperCard">
        <article
          className="swiperCard__logo"
          style={{
            backgroundImage: `url("${import.meta.env.VITE_BACKEND_URL}${
              recipe.picture
            }")`,
          }}
        >
          <AddFavorite className="swiperCard__logo__favorite" />
          <div className="swiperCard__logo__diet">
            <img
              className="swiperCard__logo__diet__vegan"
              src="/src/assets/Logo-vegan.png"
              alt="this recipe is vegan"
            />
          </div>
        </article>
        <article className="swiperCard__info">
          <h1 className="swiperCard__info__title">{recipe.title}</h1>
          <StarBar className="swiperCard_info__stars" recipe={recipe} />
        </article>
      </section>
    </Link>
  );
}
SwiperRecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};

export default SwiperRecipeCard;
