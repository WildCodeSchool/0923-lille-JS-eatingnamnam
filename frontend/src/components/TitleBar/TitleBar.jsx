import "./TitleBar.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { NavContext } from "../Contexts/navBarContext";

function TitleBar() {
  const { connected, setActiveButton } = useContext(NavContext);
  const handleClick = (event) => {
    setActiveButton(event.target.name);
  };
  return (
    <header className="titleBar">
      <img
        className="titleBar__logo"
        name="logo"
        src={`${
          import.meta.env.VITE_BACKEND_URL
        }/assets/images/Logo-nam-nam.png`}
        alt="logo"
      />
      {connected === 0 ? (
        <Link
          to="/login"
          name="login"
          className="titleBar__userLogo"
          type="submit"
          onClick={handleClick}
        >
          <img
            className="titleBar__userLogo__img"
            name="userLogo"
            src="src/assets/icone-user.svg"
            alt="userLogo"
          />
        </Link>
      ) : (
        <Link
          to="/profile"
          className="titleBar__userLogo"
          type="submit"
          name="profile"
          onClick={handleClick}
        >
          <img
            className="titleBar__userLogo__img"
            name="userLogo"
            src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/User.png`}
            alt="userLogo"
          />
        </Link>
      )}
    </header>
  );
}

export default TitleBar;
