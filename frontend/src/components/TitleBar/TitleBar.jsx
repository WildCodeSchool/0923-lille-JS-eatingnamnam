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

  const windowWidth = window.innerWidth;

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
        <form className="titleBar__searchBar">
          <input
            className="titleBar__searchBar__form"
            type="search"
            placeholder="Rechercher une recette..."
            label="Rechercher une recette..."
          />
          <button className="titleBar__searchBar__searchButton" type="submit">
            <img
              className="titleBar__searchBar__searchIcon"
              src="src/assets/activeSearch.svg"
              alt="a magnifying glass icon"
            />
          </button>
        </form>
        {auth.isLogged === false ? (
          <Link
            to="/login"
            name="login"
            className="titleBar__userLogo"
            type="submit"
            onClick={handleClick}
          >
            <div className="titleBar__userLogo__container">
              <img
                className="titleBar__userLogo__img"
                name="userLogo"
                src={
                  windowWidth < 500
                    ? `${
                        import.meta.env.VITE_BACKEND_URL
                      }/assets/images/User.png`
                    : `${
                        import.meta.env.VITE_BACKEND_URL
                      }/assets/images/Logo-vegan.png`
                }
                alt="userLogo"
              />
              <h2>Bonjour</h2>
            </div>
          </Link>
        ) : (
          <Link
            to="/profile/1"
            className="titleBar__userLogo"
            type="submit"
            name="profile"
            onClick={handleClick}
          >
            <div className="titleBar__userLogo__container">
              <img
                className="titleBar__userLogo__img"
                name="userLogo"
                src={
                  windowWidth < 500
                    ? `${
                        import.meta.env.VITE_BACKEND_URL
                      }/assets/images/User.png`
                    : `${
                        import.meta.env.VITE_BACKEND_URL
                      }/assets/images/Logo-vegan.png`
                }
                alt="userLogo"
              />
              <h2>Bonjour {auth.pseudo}</h2>
            </div>
          </Link>
        )}
      </section>
      <section className="titleBar__button__theme">
        <button className="titleBar__button__theme-change active" type="button">
          Recette aléatoire
        </button>
        <button
          className="titleBar__button__theme-change noActive"
          type="button"
        >
          Entrées
        </button>
        <button
          className="titleBar__button__theme-change noActive"
          type="button"
        >
          Plats
        </button>
        <button
          className="titleBar__button__theme-change noActive"
          type="button"
        >
          Desserts
        </button>
      </section>
    </header>
  );
}

export default TitleBar;
