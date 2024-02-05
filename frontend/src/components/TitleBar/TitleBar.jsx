import "./TitleBar.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Contexts/userContext";

function TitleBar() {
  const { auth } = useContext(UserContext);

  return (
    <header className="titleBar">
      <section className="titleBar__search">
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
          >
            <div className="titleBar__userLogo__container">
              <h2 className="titleBar__userLogo__container__title">
                Connection
              </h2>
              <img
                className="titleBar__userLogo__img"
                name="userLogo"
                src={`${
                  import.meta.env.VITE_BACKEND_URL
                }/assets/images/User.png`}
                alt="userLogo"
              />
            </div>
          </Link>
        ) : (
          <Link
            to={`/profile/${auth.id}`}
            className="titleBar__userLogo"
            type="submit"
            name="profile"
          >
            <div className="titleBar__userLogo__container">
              <h2 className="titleBar__userLogo__container__title">
                Bonjour {auth.pseudo}
              </h2>
              <img
                className="titleBar__userLogo__img__connect"
                name="userLogo"
                src={`${
                  import.meta.env.VITE_BACKEND_URL
                }/assets/images/User.png`}
                alt="userLogo"
              />
            </div>
          </Link>
        )}
      </section>
    </header>
  );
}

export default TitleBar;
