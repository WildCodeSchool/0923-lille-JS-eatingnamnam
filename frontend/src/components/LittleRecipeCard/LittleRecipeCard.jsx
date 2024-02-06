import "./LittleRecipeCard.scss";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import StarBar from "../StarBar/StarBar";

function LittleRecipeCard({ recipes }) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="LittleRecipeCardcard"
      onClick={() => {
        navigate(`/recipe/${recipes.id}`);
      }}
    >
      <section className="LittleRecipeCardcard__section">
        <img
          className="LittleRecipeCardcard__logo"
          src={`${import.meta.env.VITE_BACKEND_URL}${recipes.picture}`}
          alt="une recette de cuisine"
        />

        <article className="LittleRecipeCardcard__info">
          <section className="LittleRecipeCardcard__info__name">
            <h1 className="LittleRecipeCardcard__info__title">
              {recipes.title}
            </h1>

            <StarBar
              className="LittleRecipeCardcard_info__stars"
              id={recipes.id}
            />
          </section>
        </article>
      </section>
    </button>
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
