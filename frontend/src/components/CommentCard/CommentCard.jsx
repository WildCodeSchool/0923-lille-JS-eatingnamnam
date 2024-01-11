import "./CommentCard.scss";
import PropTypes from "prop-types";
import StarBar from "../StarBar/StarBar";

function CommentCard({ comment, recipe }) {
  return (
    <div className="comment">
      <div className="comment__container">
        <img
          className="comment__userLogo__img"
          name="userLogo"
          src="src/assets/icone-user.svg"
          alt="userLogo"
        />

        <div className="flex-items">
          <h2 className="comment__user__name">
            {comment.first_name} {comment.last_name}
          </h2>
          <StarBar recipe={recipe} />
        </div>
      </div>
      <p className="comment__text">{comment.comment}</p>
      <p className="comment__date">{comment.date_time}</p>
    </div>
  );
}

CommentCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  comment: PropTypes.shape({
    last_name: PropTypes.string.isRequired,
    first_name: PropTypes.string.isRequired,
    date_time: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
  }).isRequired,
};
export default CommentCard;
