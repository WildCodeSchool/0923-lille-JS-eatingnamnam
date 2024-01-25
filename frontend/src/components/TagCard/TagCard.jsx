import "./TagCard.scss";
import PropTypes from "prop-types";

function TagCard({ tag }) {
  return (
    <button className="tagCard" type="submit">
      <h2 className="tagname">{tag.name}</h2>
      <img
        className="tagCard__img"
        src={`${import.meta.env.VITE_BACKEND_URL}${tag.picture}`}
        alt={`${tag.name} food recipe`}
      />
    </button>
  );
}

TagCard.propTypes = {
  tag: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};

export default TagCard;
