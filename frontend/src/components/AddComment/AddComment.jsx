import "./AddComment.scss";
import StarRating from "../StarRating/StarRating";

function AddComment() {
  return (
    <section className="addComment">
      <h1 className="addComment__title"> C'est terminé !</h1>
      <div className="addComment__comment">
        <p className="addComment__comment__texte">
          N'hesite pas a faire un retour sur cette recette !
        </p>
        <StarRating className="addComment__comment__star" />
        <textarea
          id="comment"
          name="comment"
          rows="3"
          className="addComment__comment__addComment"
          placeholder="&nbsp;Laisse un commentaire ici."
        />
        <button type="button" className="addComment__comment__button">
          Partager
        </button>
      </div>
    </section>
  );
}

export default AddComment;
