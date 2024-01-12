import "./AddComment.scss";
// import StarRating from "../StarRating/StarRating";
// import { useForm } from "react-hook-form";

function AddComment() {
  // const {register, handleSubmit} = useForm()
  return (
    <section className="addComment">
      <h1 className="addComment__title"> C'est terminé !</h1>
      {/* <form onSubmit={handleSubmit(onSubmit)} className="addComment__comment">
        <h2 className="addComment__comment__texte">
          N'hesite pas a faire un retour sur cette recette !
        </h2>
        <StarRating className="addComment__comment__star" />
        <textarea
          id="comment"
          name="comment"
          {...register("comment")}
          rows="3"
          className="addComment__comment__addComment"
          placeholder="&nbsp;Laisse un commentaire ici."
        />
        <imput
          type="submit"
          className="addComment__comment__button"
          value="Partager"
        />
      </form> */}
    </section>
  );
}

export default AddComment;
