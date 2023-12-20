import "./Navbar.scss";
import { useState } from "react";

function Navbar() {
  const [isActive, setIsActive] = useState("home");
  const handleClick = (event) => {
    setIsActive(event.target.name);
    console.warn("hello make route please");
  };
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <button
            className="navbar__button"
            type="submit"
            onClick={handleClick}
          >
            {isActive !== "home" ? (
              <img
                className="navbar__icon"
                name="home"
                src="src/assets/Home.svg"
                alt="bouton accueil"
              />
            ) : (
              <img
                className="navbar__icon"
                name="home"
                src="src/assets/activeHome.svg"
                alt="bouton accueil"
              />
            )}
          </button>
        </li>
        <li className="navbar__item">
          <button
            className="navbar__button"
            type="submit"
            onClick={handleClick}
          >
            {isActive !== "search" ? (
              <img
                className="navbar__icon"
                name="search"
                src="src/assets/search.svg"
                alt="bouton accueil"
              />
            ) : (
              <img
                className="navbar__icon"
                name="search"
                src="src/assets/activeSearch.svg"
                alt="bouton accueil"
              />
            )}
          </button>
        </li>
        <li className="navbar__item">
          <button
            className="navbar__button"
            type="submit"
            onClick={handleClick}
          >
            {isActive !== "add" ? (
              <img
                className="navbar__icon"
                name="add"
                src="src/assets/add.svg"
                alt="bouton accueil"
              />
            ) : (
              <img
                className="navbar__icon"
                name="add"
                src="src/assets/activeAdd.svg"
                alt="bouton accueil"
              />
            )}
          </button>
        </li>
        <li className="navbar__item">
          <button
            className="navbar__button"
            type="submit"
            onClick={handleClick}
          >
            {isActive !== "bookmark" ? (
              <img
                className="navbar__icon"
                name="bookmark"
                src="src/assets/bookmark.svg"
                alt="bouton accueil"
              />
            ) : (
              <img
                className="navbar__icon"
                name="bookmark"
                src="src/assets/activeBookmark.svg"
                alt="bouton accueil"
              />
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
