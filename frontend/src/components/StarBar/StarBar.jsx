import "./StarBar.scss";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function StarBar({ recipe }) {
  const [grade, setGrade] = useState();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/grade/${recipe}`)
      .then((response) => response.json())
      .then((data) => setGrade(data))
      .catch((error) => console.error(error));
  }, []);

  const averageGade = Math.round(grade?.average_grade);

  const fullStars = Array(5).fill("src/assets/star.svg");
  const emptyStars = Array(5).fill("src/assets/emptyStar.svg");

  return (
    <div className="starContainer">
      {fullStars.slice(5 - averageGade).map((fullStar) => {
        return <img className="starContainer__img" src={fullStar} alt="star" />;
      })}

      {emptyStars.slice(averageGade).map((emptyStar) => {
        return (
          <img
            className="starContainer__img"
            src={emptyStar}
            alt="empty star"
          />
        );
      })}
    </div>
  );
}
StarBar.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default StarBar;
