import "./StarBar.scss";

function StarBar() {
  const gradesRecipe = 4;

  const fullStars = Array(5).fill("src/assets/star.svg");
  const emptyStars = Array(5).fill("src/assets/emptyStar.svg");

  return (
    <div>
      {fullStars.slice(5 - gradesRecipe).map((fullStar) => {
        return <img src={fullStar} alt="star" />;
      })}

      {emptyStars.slice(gradesRecipe).map((emptyStar) => {
        return <img src={emptyStar} alt="empty star" />;
      })}
    </div>
  );
}
export default StarBar;
