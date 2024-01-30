import { Rating } from "react-simple-star-rating";
import PropTypes from "prop-types";

/**
 *
 * @param {grade: number, setGrade: function}  props - The grade of the review and a method to update that grade.
 * @returns  a component that displays the rating of an item.
 */

function StarRating({ grade, setGrade }) {
  //  Handles the onChange event for the star rating component
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
