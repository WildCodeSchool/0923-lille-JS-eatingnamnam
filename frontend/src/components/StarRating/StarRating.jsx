import { Rating } from "react-simple-star-rating";
import PropTypes from "prop-types";

function StarRating({ grade, setGrade }) {
  const handleRating = (rate) => {
    setGrade(rate);
  };

  return (
    <Rating
      onClick={handleRating}
      ratingValue={grade}
      transition
      fillColor="#D56C06"
    />
  );
}

StarRating.propTypes = {
  grade: PropTypes.number.isRequired,
  setGrade: PropTypes.func.isRequired,
};

export default StarRating;
