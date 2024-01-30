import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

/**
 *
 * @returns return a provider component that provides user data to its children components.
 */

export function UserProvider({ children }) {
  const initialState = {
    email: null,
    id: null,
    pseudo: null,
    isLogged: false,
  };
  const [auth, setAuth] = useState(initialState);
  const userState = useMemo(
    () => ({
      auth,
      setAuth,
    }),
    [auth, setAuth]
  );

  return (
    <UserContext.Provider value={userState}>{children}</UserContext.Provider>
  );
}
UserProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
