import "./Navbar.scss";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { NavContext } from "../Contexts/navBarContext";
import { UserContext } from "../Contexts/userContext";

function Navbar() {
  const { activeButton, setActiveButton } = useContext(NavContext);
  const { auth } = useContext(UserContext);
  const handleClick = (event) => {
    setActiveButton(event.target.name);
  };
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link
            to="/"
            className="navbar__link"
            type="submit"
            onClick={handleClick}
          >
            {activeButton !== "home" ? (
              <img
                className="navbar__icon"
                name="home"
                src={`${
                  import.meta.env.VITE_BACKEND_URL
                }/assets/images/Home.svg`}
                alt="bouton accueil"
              />
            ) : (
              <img
                className="navbar__icon"
                name="home"
                src={`${
                  import.meta.env.VITE_BACKEND_URL
                }/assets/images/activeHome.svg`}
                alt="bouton accueil"
              />
            )}
          </Link>
        </li>
        <li className="navbar__item">
          <Link
            to="/search"
            className="navbar__link"
            type="submit"
            onClick={handleClick}
          >
            {activeButton !== "search" ? (
              <img
                className="navbar__icon"
                name="search"
                src={`${
                  import.meta.env.VITE_BACKEND_URL
                }/assets/images/search.svg`}
                alt="bouton accueil"
              />
            ) : (
              <img
                className="navbar__icon"
                name="search"
                src={`${
                  import.meta.env.VITE_BACKEND_URL
                }/assets/images/activeSearch.svg`}
                alt="bouton accueil"
              />
            )}
          </Link>
        </li>
        <li className="navbar__item">
          <Link
            to="/add/recipe"
            className="navbar__link"
            type="submit"
            onClick={handleClick}
          >
            {activeButton !== "add" ? (
              <img
                className="navbar__icon"
                name="add"
                src={`${
                  import.meta.env.VITE_BACKEND_URL
                }/assets/images/add.svg`}
                alt="bouton accueil"
              />
            ) : (
              <img
                className="navbar__icon"
                name="add"
                src={`${
                  import.meta.env.VITE_BACKEND_URL
                }/assets/images/activeAdd.svg`}
                alt="bouton accueil"
              />
            )}
          </Link>
        </li>
        <li className="navbar__item">
          <Link
            to={auth.id ? `/favorites/${auth.id}` : ""}
            className="navbar__link"
            type="submit"
            onClick={handleClick}
          >
            <img
              className="navbar__icon"
              name="bookmark"
              src={
                activeButton !== "bookmark"
                  ? `${
                      import.meta.env.VITE_BACKEND_URL
                    }/assets/images/bookmark.svg`
                  : `${
                      import.meta.env.VITE_BACKEND_URL
                    }/assets/images/activeBookmark.svg`
              }
              alt="bouton accueil"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
