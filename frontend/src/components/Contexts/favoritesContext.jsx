import { createContext, useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";

export const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState("");
  const userState = useMemo(
    () => ({
      favorites,
      setFavorites,
    }),
    [favorites, setFavorites]
  );

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/recipe/fav/user/:id`)
      .then((response) => response.json())
      .then((data) => setFavorites(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <FavoriteContext.Provider value={userState}>
      {children}
    </FavoriteContext.Provider>
  );
}
FavoriteProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
