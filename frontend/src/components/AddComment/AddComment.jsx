/* eslint-disable react/jsx-props-no-spreading */
import "./AddComment.scss";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from "react-hook-form";
import StarRating from "../StarRating/StarRating";

function AddComment() {
  const { register, handleSubmit } = useForm();
  // eslint-disable-next-line no-alert
  const onSubmit = (data) => alert(JSON.stringify(data));
  return (
    <section className="addComment">
      <h1 className="addComment__title"> C'est terminé !</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="addComment__comment">
        <h2 className="addComment__comment__texte">
          N'hesite pas a faire un retour sur cette recette !
        </h2>
        <StarRating className="addComment__comment__star" />
        <label className="addComment__comment__addComment">
          <textarea
            id="comment"
            {...register("comment")}
            rows="3"
            className="addComment__comment__addComment__text"
            placeholder="&nbsp;Laisse un commentaire ici."
          />
        </label>
        <input
          type="submit"
          value="Commenter"
          className="addComment__comment__button"
        />
      </form>
    </section>
  );
}

export default AddComment;
