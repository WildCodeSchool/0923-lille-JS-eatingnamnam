import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const initialState = {
    email: null,
    id: null,
    pseudo: null,
    role: "user",
    isLogged: false,
  };
  const [auth, setAuth] = useState(initialState);
  const [updateRecipe, setUpdateRecipe] = useState(false);
  const userState = useMemo(
    () => ({
      auth,
      setAuth,
      updateRecipe,
      setUpdateRecipe,
    }),
    [auth, setAuth, updateRecipe, setUpdateRecipe]
  );

  return (
    <UserContext.Provider value={userState}>{children}</UserContext.Provider>
  );
}
UserProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
