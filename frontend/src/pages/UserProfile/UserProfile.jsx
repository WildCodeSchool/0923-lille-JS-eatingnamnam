import "./UserProfile.scss";

import { useEffect, useState, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../components/Contexts/userContext";
import RecipeCardUser from "../../components/RecipeCardUser/RecipeCardUser";

/**
 *
 * @returns the  user profile page where users can see their own recipes and other users publicly shared recipes
 */

function UserProfil() {
  const { setAuth } = useContext(UserContext);
  const navigate = useNavigate();

  // Connected user's id from URL parmas
  const { userId } = useParams();

  /**
   *  State for the recipes of the user we are looking at.
   */
  const [recipes, setRecipes] = useState([]);
  const [user, setUser] = useState({});

  //  Get all recipe related to this user when component mount
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/recipe`)
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error(error));

    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
  }, []);

  // change the format of the date from de BDD
  const dateTime = new Date(user.birth_date);
  const newFormatDate = dateTime.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  // function  that handle logout action
  const handleLogout = () => {
    try {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/logout`, {
        method: "get",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error(error);
    }
    setAuth({ user: null, isLogged: false });
    navigate("/login");
  };

  return (
    <section className="userProfil_mainSection">
      <img
        className="UserProfil__img__profil"
        src={`${
          import.meta.env.VITE_BACKEND_URL
        }/assets/images/photo-profil-user.jpeg`}
        alt=""
      />
      <img
        className="UserProfil__img"
        src={`${
          import.meta.env.VITE_BACKEND_URL
        }/assets/images/PlateauFromageProfil.png`}
        alt=""
      />
      <header className="UserProfil__header">
        {user && (
          <h1 className="UserProfil__name">
            {user.last_name} {user.first_name}
          </h1>
        )}
        <button
          className="UserProfil__logoutButton"
          type="submit"
          onClick={handleLogout}
        >
          <img
            className="UserProfil__logoutIcon"
            src={`${
              import.meta.env.VITE_BACKEND_URL
            }/assets/images/logoutIcon.png`}
            alt="a logout icon"
          />
        </button>
      </header>
      <section className="Userprofil__form">
        <h4 className="UserProfil__myInfo">Mes infos</h4>

        <form className="UserProfil__info" action="#" method="post">
          <section className="UserProfil__pseudo">
            <label className="UserProfil__Label" htmlFor="pseudo">
              <p className="UserProfil__text">Pseudo: </p>
              {user && (
                <input
                  id="pseudo"
                  className="UserProfil__pseudo__input"
                  type="text"
                  value={user.pseudo}
                />
              )}
            </label>
          </section>

          <section className="UserProfil__anniversaire">
            <label className="UserProfil__Label" htmlFor="anniversaire">
              <p className="UserProfil__text__right">Anniversaire:</p>
              {user && (
                <input
                  id="anniversaire"
                  className="UserProfil__anniversaire__input"
                  type="text"
                  value={newFormatDate}
                />
              )}
            </label>
          </section>
          <section className="UserProfil__nom">
            <label className="UserProfil__Label" htmlFor="nom">
              <p className="UserProfil__text">Nom:</p>
              {user && (
                <input
                  id="nom"
                  className="UserProfil__nom__input"
                  type="text"
                  value={user.last_name}
                />
              )}
            </label>
          </section>
          <section className="UserProfil__prenom">
            <label className="UserProfil__Label" htmlFor="prenom">
              <p className="UserProfil__text__right">Prénom:</p>
              {user && (
                <input
                  id="prenom"
                  className="UserProfil__prenom__input"
                  type="text"
                  value={user.first_name}
                />
              )}
            </label>
          </section>
          <section className="UserProfil__mail">
            <label className="UserProfil__Label" htmlFor="email">
              <p className="UserProfil__text__email">Email:</p>
              {user && (
                <input
                  id="email"
                  className="UserProfil__mail__input"
                  type="text"
                  value={user.email}
                />
              )}
            </label>
          </section>
        </form>
      </section>
      <Link className="UserProfil__button__post" to="/add/recipe">
        Créer une nouvelle recette !
      </Link>
      <h1 className="UserProfil__post__fav">Mes postes</h1>

      <div className="UserProfil__post__contener">
        {recipes
          ? recipes.map((recipe) => (
              <RecipeCardUser key={`recipe:${recipe.id}`} recipe={recipe} />
            ))
          : ""}
      </div>
    </section>
  );
}

export default UserProfil;
