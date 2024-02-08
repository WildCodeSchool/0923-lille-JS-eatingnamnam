import "./StarBarComment.scss";
import PropTypes from "prop-types";

function StarBarComment({ grade }) {
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
      {fullStars.slice(5 - grade).map((fullStar) => {
        return (
          <img
            key={`fullstarIndex-${fullStar.id}`}
            className="starContainer__img"
            src={fullStar.src}
            alt="star"
          />
        );
      })}

      {emptyStars.slice(grade).map((emptyStar) => {
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
StarBarComment.propTypes = {
  grade: PropTypes.number.isRequired,
};

export default StarBarComment;
