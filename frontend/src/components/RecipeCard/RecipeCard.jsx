import "./RecipeCard.scss";

import StarBar from "../StarBar/StarBar";
import AddFavorite from "../AddFavorite/AddFavorite";

function RecipeCard() {
  return (
    <section className="card">
      <article className="card__logo">
        <AddFavorite className="card__logo__favorite" />
        <div className="card__logo__diet">
          <img
            className="card__logo__diet__vegan"
            src="/src/assets/Logo-vegan.png"
            alt="this recipe is vegan"
          />
        </div>
      </article>
      <article className="card__info">
        <h1 className="card__info__title">Nom recette</h1>
        <StarBar className="card_info__stars" />
      </article>
    </section>
  );
}

export default RecipeCard;
