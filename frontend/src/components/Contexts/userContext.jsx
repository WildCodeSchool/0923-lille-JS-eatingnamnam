import { createContext, useState, useMemo, useEffect } from "react";
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
  const userState = useMemo(
    () => ({
      auth,
      setAuth,
    }),
    [auth, setAuth]
  );
  const setConnection = async () => {
    try {
      const result = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/me`);
      setAuth({ user: result.data, isLogged: false });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    setConnection();
  }, []);

  return (
    <UserContext.Provider value={userState}>{children}</UserContext.Provider>
  );
}
UserProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
