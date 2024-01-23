import { createContext, useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const initialState = {
    email: null,
    id: null,
    pseudo: null,
    role: null,
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

  /*   const setConnection = async () => {
    try {
      const result = fetch(`${import.meta.env.VITE_BACKEND_URL}/api/me`);
      console.log("result of fetch user:", result.data);
    } catch (error) {
      console.error(error);
    } 
   setAuth({ user: result.data, isLogged: true }); 
  } */
  useEffect(() => {
    try {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/me`)
        /*       console
        .log("fetching") */
        .then((response) => response.json())
        .then((data) => console.warn("data du fetch:", data));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <UserContext.Provider value={userState}>{children}</UserContext.Provider>
  );
}
UserProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
