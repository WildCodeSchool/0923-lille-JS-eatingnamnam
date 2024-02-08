import "./CommentCard.scss";
import PropTypes from "prop-types";
import StarBarComment from "../StarBarComment/StarBarComment";

function CommentCard({ comment }) {
  const datTime = new Date(comment.date_time);
  const formattedDate = datTime.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div className="comment">
      <div className="comment__container">
        <img
          className="comment__userLogo__img"
          name="userLogo"
          src={`${
            import.meta.env.VITE_BACKEND_URL
          }/assets/images/icone-user.svg`}
          alt="userLogo"
        />

        <div className="flex-items">
          <h2 className="comment__user__name">
            {comment.first_name} {comment.last_name}
          </h2>
          <StarBarComment grade={comment.grade} />
        </div>
      </div>
      <p className="comment__text">{comment.comment}</p>
      <p className="comment__date">{formattedDate}</p>
    </div>
  );
}

CommentCard.propTypes = {
  comment: PropTypes.shape({
    last_name: PropTypes.string.isRequired,
    first_name: PropTypes.string.isRequired,
    date_time: PropTypes.string.isRequired,
    grade: PropTypes.number,
    comment: PropTypes.string,
  }).isRequired,
};
export default CommentCard;
