import { useContext } from "react";
import { UserContext } from "../Contexts/userContext";
import "./AddFavorite.scss";

function AddFavorite(recipe) {
  const { id } = recipe;
  const { auth } = useContext(UserContext);

  const handleClickFavorite = () => {
    try {
      fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/${
          auth.id
        }/recipe/${id}/delete`,
        {
          method: "delete",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <button type="button" className="logo" onClick={handleClickFavorite}>
      <img
        className="logo__isFavorite"
        src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/Heart.png`}
        alt="favorite icon"
      />
    </button>
  );
}

export default AddFavorite;
