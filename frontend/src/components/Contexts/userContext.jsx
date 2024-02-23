// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import { createContext, useState, useEffect, useMemo } from "react";
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

  const setConnection = async () => {
    console.info("entering set connection");
    console.info("auth email is ==>", auth.email);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/me`,
        //       JSON.stringify({ auth }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setAuth({
        id: response.data.id,
        pseudo: response.data.username,
        email: response.data.email,
        role: response.data.role,
        isLogged: true,
      });
      console.info("auth:", auth);
      console.info("response data:", response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    console.info("old auth ! -->", auth);
    setConnection();
    console.info("NEW AUTH ===>", auth);
  }, [setAuth]);

  return (
    <UserContext.Provider value={userState}>{children}</UserContext.Provider>
  );
}
UserProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
