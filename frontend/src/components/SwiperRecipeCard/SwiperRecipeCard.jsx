import "./SwiperRecipeCard.scss";

import StarBar from "../StarBar/StarBar";
import AddFavorite from "../AddFavorite/AddFavorite";

function SwiperRecipeCard() {
  return (
    <section className="swiperCard">
      <article className="swiperCard__logo">
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
        <h1 className="swiperCard__info__title">Nom recette</h1>
        <StarBar className="swiperCard_info__stars" />
      </article>
    </section>
  );
}

export default SwiperRecipeCard;
