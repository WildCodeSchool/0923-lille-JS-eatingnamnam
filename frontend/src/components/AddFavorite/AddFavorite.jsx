import { useState } from "react";
import "./AddFavorite.scss";

function AddFavorie() {
  const [isFavorite, setIsFavorite] = useState(false);
  const handelClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <button type="button" className="logo" onClick={handelClickFavorite}>
      {isFavorite ? (
        <img
          className="logo__isfavorite"
          src="/src/assets/Hert.png"
          alt="favorit"
        />
      ) : (
        <img
          className="logo__notfavorite"
          src="/src/assets/emptyHert.png"
          alt="add to favorit"
        />
      )}
    </button>
  );
}

export default AddFavorie;
