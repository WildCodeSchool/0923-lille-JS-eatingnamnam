import "./TitleBar.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { NavContext } from "../Contexts/navBarContext";
import { UserContext } from "../Contexts/userContext";

function TitleBar() {
  const { setActiveButton } = useContext(NavContext);
  const { auth } = useContext(UserContext);
  const handleClick = (event) => {
    setActiveButton(event.target.name);
  };
  return (
    <header className="titleBar">
      {auth.isLogged === true ? <h1> hi {auth.pseudo}</h1> : ""}
      <img
        className="titleBar__logo"
        name="logo"
        src={`${
          import.meta.env.VITE_BACKEND_URL
        }/assets/images/Logo-nam-nam.png`}
        alt="logo"
      />
      {auth.isLogged === false ? (
        <Link
          to="/login"
          name="login"
          className="titleBar__userLogo"
          type="submit"
          onClick={handleClick}
        >
          <img
            className="titleBar__userLogo__img"
            name="logo"
            src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/User.png`}
            alt="logo"
          />
        </Link>
      ) : (
        <Link
          to="/profile/1"
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
