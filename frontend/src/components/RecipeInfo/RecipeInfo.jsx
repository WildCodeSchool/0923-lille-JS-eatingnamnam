import "./RecipeInfo.scss";
import PropTypes from "prop-types";
import StarBar from "../StarBar/StarBar";
import AddFavorite from "../AddFavorite/AddFavorite";

function RecipeCardPage({ recipe }) {
  const nbEuro = Array(recipe.price).fill("src/assets/euro.svg");

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
            alt="logo signalant une recette vegan"
          />
        </div>
      </section>
      <section className="RecipeCardPage__info">
        <p className="RecipeCardPage_info__p">"nb commentaire(s)"</p>
        <StarBar className="RecipeCardPage_info__stars" />
      </section>

      <h1 className="RecipeCardPage__info__title">{recipe.title}</h1>

      <section className="RecipeCardPage__details">
        <div className="RecipeCardPage__details__difficulty">
          <img
            className="RecipeCardPage__details__difficulty__hote"
            src="/src/assets/toque.svg"
            alt="toque de cuisinier"
          />
          <p>{recipe.difficulty} </p>
        </div>
        <img
          className="RecipeCardPage__details__union"
          src="/src/assets/union.svg"
          alt="séparation"
        />
        <div className="RecipeCardPage__details__time">
          <img
            className="RecipeCardPage__details__time__clock"
            src="src/assets/time.svg"
            alt="horloge"
          />
          <p> {recipe.time} </p>
        </div>
        <img
          className="RecipeCardPage__details__union"
          src="/src/assets/union.svg"
          alt="séparation"
        />

        <div className="RecipeCardPage__details__price">
          {nbEuro.map((euro, index) => {
            return (
              <img
                key={euro[index]}
                className="RecipeCardPage__details__price__euro"
                src={euro}
                alt="pièce euro"
              />
            );
          })}
        </div>
      </section>
      <h2 className="RecipeCardPage__nbShare">
        {recipe.number_share} personne(s)
      </h2>
    </section>
  );
}
RecipeCardPage.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    number_share: PropTypes.number.isRequired,
  }).isRequired,
};

export default RecipeCardPage;
