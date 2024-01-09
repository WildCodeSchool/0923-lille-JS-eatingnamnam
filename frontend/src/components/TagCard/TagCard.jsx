import "./TagCard.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function TagCard({ tag }) {
  return (
    <Link to="/" className="tagCard" type="submit">
      <h2 className="tagname">{tag.name}</h2>
      <img
        className="tagCard__img"
        src={`${import.meta.env.VITE_BACKEND_URL}${tag.picture}`}
        alt={`${tag.name} food recipe`}
      />
    </Link>
  );
}

TagCard.propTypes = {
  tag: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};

export default TagCard;
