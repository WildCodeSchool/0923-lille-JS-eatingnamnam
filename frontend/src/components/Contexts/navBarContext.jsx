import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const NavContext = createContext();

/**
 *
 * @returns return the context provider for navigation
 */

export function NavBarProvider({ children }) {
  const [activeButton, setActiveButton] = useState("home");
  const [connected, setConnected] = useState(0);
  const [choose, setChoose] = useState("connection");

  const stateButton = useMemo(
    () => ({
      activeButton,
      setActiveButton,
      connected,
      setConnected,
      choose,
      setChoose,
    }),
    [activeButton, setActiveButton, connected, setConnected, choose, setChoose]
  );

  return (
    <NavContext.Provider value={stateButton}>{children}</NavContext.Provider>
  );
}
NavBarProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
