import "./CommentCard.scss";
import StarBar from "../StarBar/StarBar";

function Comment() {
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
          <h2 className="comment__user__name">userName</h2>
          <StarBar />
        </div>
      </div>
      <p className="comment__text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam veniam
        incidunt delectus distinctio a sapiente, numquam sit ducimus
        exercitationem ratione. Fugiat iusto cum optio delectus amet deserunt
        quas maiores natus!
      </p>
      <p className="comment__date">2023-12-25 - 17h30</p>
    </div>
  );
}
export default Comment;
