import "./StarBar.scss";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

/**
 *
 * @param {id: number}  props - The id of the star bar to display
 * @returns Star Bar component with filled and empty stars based on given rating
 */

function StarBar({ id }) {
  const [grade, setGrade] = useState();
  // fetch grade from specific id from backend when component mounts
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/grade/${id}`)
      .then((response) => response.json())
      .then((data) => setGrade(data))
      .catch((error) => console.error(error));
  }, []);

  //  render stars based on the grade received from the server
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
