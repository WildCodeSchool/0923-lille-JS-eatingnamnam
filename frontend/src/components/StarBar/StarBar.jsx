import "./StarBar.scss";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function StarBar({ id }) {
  const [grade, setGrade] = useState();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/grade/${id}`)
      .then((response) => response.json())
      .then((data) => setGrade(data))
      .catch((error) => console.error(error));
  }, []);

  const averageGrade = Math.round(grade?.average_grade);

  const fullStars = [
    {
      id: 1,
      src: `${import.meta.env.VITE_BACKEND_URL}/assets/images/star.svg`,
    },
    {
      id: 2,
      src: `${import.meta.env.VITE_BACKEND_URL}/assets/images/star.svg`,
    },
    {
      id: 3,
      src: `${import.meta.env.VITE_BACKEND_URL}/assets/images/star.svg`,
    },
    {
      id: 4,
      src: `${import.meta.env.VITE_BACKEND_URL}/assets/images/star.svg`,
    },
    {
      id: 5,
      src: `${import.meta.env.VITE_BACKEND_URL}/assets/images/star.svg`,
    },
  ];

  const emptyStars = [
    {
      id: 1,
      src: `${import.meta.env.VITE_BACKEND_URL}/assets/images/emptyStar.svg`,
    },
    {
      id: 2,
      src: `${import.meta.env.VITE_BACKEND_URL}/assets/images/emptyStar.svg`,
    },
    {
      id: 3,
      src: `${import.meta.env.VITE_BACKEND_URL}/assets/images/emptyStar.svg`,
    },
    {
      id: 4,
      src: `${import.meta.env.VITE_BACKEND_URL}/assets/images/emptyStar.svg`,
    },
    {
      id: 5,
      src: `${import.meta.env.VITE_BACKEND_URL}/assets/images/emptyStar.svg`,
    },
  ];
  return (
    <div className="starContainer">
      {fullStars.slice(5 - averageGrade).map((fullStar) => {
        return (
          <img
            key={`fullstarIndex-${fullStar.id}`}
            className="starContainer__img"
            src={fullStar.src}
            alt="star"
          />
        );
      })}

      {emptyStars.slice(averageGrade).map((emptyStar) => {
        return (
          <img
            key={`emptyStarIndex-${emptyStar.id}`}
            className="starContainer__img"
            src={emptyStar.src}
            alt="empty star"
          />
        );
      })}
    </div>
  );
}
StarBar.propTypes = {
  id: PropTypes.number.isRequired,
};

export default StarBar;
