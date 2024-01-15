import "./RecipeInfo.scss";
import PropTypes from "prop-types";
import StarBar from "../StarBar/StarBar";
import AddFavorite from "../AddFavorite/AddFavorite";

function RecipeInfo({ recipe, id }) {
  const nbEuro = Array(recipe.price).fill("src/assets/euro.svg");

  return (
    <section className="RecipeInfo">
      <section
        className="RecipeInfo__header"
        style={{
          backgroundImage: `url("${import.meta.env.VITE_BACKEND_URL}${
            recipe.picture
          }")`,
        }}
      >
        <AddFavorite className="RecipeInfo__header__favorite" />
        <div className="RecipeInfo__header__diet">
          <img
            className="RecipeInfo__header__diet__vegan"
            src="/src/assets/Logo-vegan.png"
            alt="logo signalant une recette vegan"
          />
        </div>
      </section>
      <section className="RecipeInfo__info">
        <p className="RecipeInfo_info__p">"nb commentaire(s)"</p>
        <StarBar className="RecipeInfo_info__stars" id={id} />
      </section>

      <h1 className="RecipeInfo__info__title">{recipe.title}</h1>

      <section className="RecipeInfo__details">
        <div className="RecipeInfo__details__difficulty">
          <img
            className="RecipeInfo__details__difficulty__hote"
            src="/src/assets/toque.svg"
            alt="toque de cuisinier"
          />
          <p className="RecipeInfo__details__difficulty__text">
            {recipe.difficulty}
          </p>
        </div>
        <img
          className="RecipeInfo__details__union"
          src="/src/assets/union.svg"
          alt="séparation"
        />
        <div className="RecipeInfo__details__time">
          <img
            className="RecipeInfo__details__time__clock"
            src="src/assets/time.svg"
            alt="horloge"
          />
          <p className="RecipeInfo__details__time__text"> {recipe.time} </p>
        </div>
        <img
          className="RecipeInfo__details__union"
          src="/src/assets/union.svg"
          alt="séparation"
        />

        <div className="RecipeInfo__details__price">
          {nbEuro.map((euro, index) => {
            return (
              <img
                key={euro[index]}
                className="RecipeInfo__details__price__euro"
                src={euro}
                alt="pièce euro"
              />
            );
          })}
        </div>
      </section>
      <h2 className="RecipeInfo__nbShare">{recipe.number_share} personne(s)</h2>
    </section>
  );
}
RecipeInfo.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    number_share: PropTypes.number.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
};

export default RecipeInfo;
