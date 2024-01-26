import "./UserProfile.scss";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../components/Contexts/userContext";
import RecipeCardUser from "../../components/RecipeCardUser/RecipeCardUser";

function UserProfil() {
  const [recipes, setRecipes] = useState();
  const { setAuth } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/recipe`)
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error(error));
  }, []);
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
    <>
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
        <h1 className="UserProfil__name">Thomas NIGON</h1>
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
              <p className="UserProfil__text">Pseudo:</p>
              <input
                id="pseudo"
                className="UserProfil__pseudo__input"
                type="text"
              />
            </label>
          </section>

          <section className="UserProfil__anniversaire">
            <label className="UserProfil__Label" htmlFor="anniversaire">
              <p className="UserProfil__text__right">Anniversaire:</p>
              <input
                id="anniversaire"
                className="UserProfil__anniversaire__input"
                type="text"
              />
            </label>
          </section>
          <section className="UserProfil__nom">
            <label className="UserProfil__Label" htmlFor="nom">
              <p className="UserProfil__text">Nom:</p>
              <input id="nom" className="UserProfil__nom__input" type="text" />
            </label>
          </section>
          <section className="UserProfil__prenom">
            <label className="UserProfil__Label" htmlFor="prenom">
              <p className="UserProfil__text__right">Prénom:</p>
              <input
                id="prenom"
                className="UserProfil__prenom__input"
                type="text"
              />
            </label>
          </section>
          <section className="UserProfil__mail">
            <label className="UserProfil__Label" htmlFor="email">
              <p className="UserProfil__text__email">Email:</p>
              <input
                id="email"
                className="UserProfil__mail__input"
                type="text"
              />
            </label>
          </section>
        </form>
      </section>
      <button className="UserProfil__button__post" type="button">
        Créer un post +
      </button>
      <h1 className="UserProfil__post__fav">Mes postes</h1>

      <div className="UserProfil__post__contener">
        {recipes
          ? recipes.map((recipe) => (
              <RecipeCardUser key={`recipe:${recipe.id}`} recipe={recipe} />
            ))
          : ""}
      </div>
    </>
  );
}

export default UserProfil;
