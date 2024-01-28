import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const initialState = {
    email: null,
    id: null,
    pseudo: null,
    isLogged: false,
  };
  const [auth, setAuth] = useState(initialState);
  const [favorites, setFavorites] = useState("");
  const userState = useMemo(
    () => ({
      auth,
      setAuth,
      favorites,
      setFavorites,
    }),
    [auth, setAuth, favorites, setFavorites]
  );

  return (
    <UserContext.Provider value={userState}>{children}</UserContext.Provider>
  );
}
UserProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
