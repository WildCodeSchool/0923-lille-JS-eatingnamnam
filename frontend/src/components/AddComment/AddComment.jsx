/* eslint-disable react/jsx-props-no-spreading */
import "./AddComment.scss";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from "react-hook-form";
import StarRating from "../StarRating/StarRating";
import { UserContext } from "../Contexts/userContext";

function AddComment() {
  const { auth } = useContext(UserContext);
  const { recipeId } = useParams();
  const { register, handleSubmit } = useForm();
  const [grade, setGrade] = useState(0);
  const userId = auth.id;

  // eslint-disable-next-line no-alert
  const onSubmit = (data) => {
    try {
      const { comment } = data;
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/add/comment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          recipeId,
          userId,
          grade,
          comment,
        }),
        credentials: "include",
      });
    } catch (error) {
      console.error("je suis l'érreur du fetch de ADD COMMENT", error);
    }
  };
  return (
    <section className="addComment">
      <h1 className="addComment__title"> C'est terminé !</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="addComment__comment">
        <h2 className="addComment__comment__texte">
          N'hésite pas à faire un retour sur cette recette !
        </h2>
        <StarRating
          grade={grade}
          setGrade={setGrade}
          className="addComment__comment__star"
        />
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
