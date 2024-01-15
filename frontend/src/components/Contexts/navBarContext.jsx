import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const NavContext = createContext();

export function NavBarProvider({ children }) {
  const [activeButton, setActiveButton] = useState("home");
  const stateButton = useMemo(
    () => ({ activeButton, setActiveButton }),
    [activeButton, setActiveButton]
  );

  return (
    <NavContext.Provider value={stateButton}>{children}</NavContext.Provider>
  );
}
NavBarProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
