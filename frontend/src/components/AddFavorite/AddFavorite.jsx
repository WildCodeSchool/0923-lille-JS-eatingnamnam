import { useState } from "react";
import "./AddFavorite.scss";

function AddFavorite() {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <button type="button" className="logo" onClick={handleClickFavorite}>
      {isFavorite ? (
        <img
          className="logo__isFavorite"
          src="/src/assets/Heart.png"
          alt="favorite icon"
        />
      ) : (
        <img
          className="logo__notFavorite"
          src="/src/assets/emptyHeart.png"
          alt="add to favorite icon"
        />
      )}
    </button>
  );
}

export default AddFavorite;
