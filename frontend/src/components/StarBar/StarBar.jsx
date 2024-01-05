import "./StarBar.scss";

function StarBar() {
  const gradesRecipe = 3;

  const fullStars = Array(5).fill("src/assets/star.svg");
  const emptyStars = Array(5).fill("src/assets/emptyStar.svg");

  return (
    <div className="starContainer">
      {fullStars.slice(5 - gradesRecipe).map((fullStar, index) => {
        return (
          <img
            key={fullStar[index]}
            className="starContainer__img"
            src={fullStar}
            alt="star"
          />
        );
      })}

      {emptyStars.slice(gradesRecipe).map((emptyStar, index) => {
        return (
          <img
            key={emptyStar[index]}
            className="starContainer__img"
            src={emptyStar}
            alt="empty star"
          />
        );
      })}
    </div>
  );
}
export default StarBar;
