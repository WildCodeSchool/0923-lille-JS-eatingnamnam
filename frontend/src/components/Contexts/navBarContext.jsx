import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const NavContext = createContext();

export function NavBarProvider({ children }) {
  const [activeButton, setActiveButton] = useState("home");
  const [connected, setConnected] = useState(0);
  const [recipeID, setRecipeID] = useState("1");
  const stateButton = useMemo(
    () => ({
      activeButton,
      setActiveButton,
      recipeID,
      setRecipeID,
      connected,
      setConnected,
    }),
    [
      activeButton,
      setActiveButton,
      recipeID,
      setRecipeID,
      connected,
      setConnected,
    ]
  );

  return (
    <NavContext.Provider value={stateButton}>{children}</NavContext.Provider>
  );
}
NavBarProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
