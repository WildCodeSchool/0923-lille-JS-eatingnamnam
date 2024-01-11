import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const NavContext = createContext();

export function NavBarProvider({ children }) {
  const [activeButton, setActiveButton] = useState("home");
  const [recipeID, setRecipeID] = useState("1");

  return (
    <NavContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ activeButton, setActiveButton, recipeID, setRecipeID }}
    >
      {children}
    </NavContext.Provider>
  );
}
NavBarProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
