import "./UserProfile.scss";
import { useEffect, useState, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../components/Contexts/userContext";
import RecipeCardUser from "../../components/RecipeCardUser/RecipeCardUser";

function UserProfil() {
  const [recipes, setRecipes] = useState([]);
  const { auth, setAuth } = useContext(UserContext);
  const navigate = useNavigate();
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [myInfo, setMyInfo] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/recipe/user/${auth.id}`)
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error(error));

    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
  }, []);

  const dateTime = new Date(user.birth_date);
  const newFormatDate = dateTime.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
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

  const handleClick = () => {
    setMyInfo(!myInfo);
  };

  return (
    <section className="userProfil">
      <header className="UserProfil__header">
        <img
          className="UserProfil__header__img"
          src={`${
            import.meta.env.VITE_BACKEND_URL
          }/assets/images/PlateauFromageProfil.png`}
          alt=""
        />
        <div className="UserProfil__header__info">
          {user && (
            <h1 className="UserProfil__header__info__name">
              {user.last_name} {user.first_name}
            </h1>
          )}
          <button
            className="UserProfil__header__info__Button"
            type="submit"
            onClick={handleLogout}
          >
            <img
              className="UserProfil__header__info__Button__img"
              src={`${
                import.meta.env.VITE_BACKEND_URL
              }/assets/images/logoutIcon.png`}
              alt="a logout icon"
            />
          </button>
        </div>
      </header>
      {myInfo === true ? (
        <section className="Userprofil__form">
          <button
            type="button"
            className="UserProfil__form__buttonMyInfo"
            onClick={handleClick}
          >
            Mes infos
          </button>
          <form className="UserProfil__form__info" action="#" method="post">
            <label className="UserProfil__form__info__pseudo" htmlFor="pseudo">
              Pseudo:
              {user && (
                <input
                  id="pseudo"
                  className="UserProfil__form__info__input"
                  type="text"
                  defaultValue={user.pseudo}
                />
              )}
            </label>

            <label
              className="UserProfil__form__info__born"
              htmlFor="anniversaire"
            >
              Anniversaire:
              {user && (
                <input
                  id="anniversaire"
                  className="UserProfil__form__info__input"
                  type="text"
                  defaultValue={newFormatDate}
                />
              )}
            </label>

            <label className="UserProfil__form__info__name" htmlFor="nom">
              Nom:
              {user && (
                <input
                  id="nom"
                  className="UserProfil__form__info__input"
                  type="text"
                  defaultValue={user.last_name}
                />
              )}
            </label>

            <label
              className="UserProfil__form__info__firstname"
              htmlFor="prenom"
            >
              Prénom:
              {user && (
                <input
                  id="prenom"
                  className="UserProfil__form__info__input"
                  type="text"
                  defaultValue={user.first_name}
                />
              )}
            </label>

            <label className="UserProfil__form__info__email" htmlFor="email">
              Email:
              {user && (
                <input
                  id="email"
                  className="UserProfil__form__info__input"
                  type="text"
                  defaultValue={user.email}
                />
              )}
            </label>
          </form>
        </section>
      ) : (
        <section className="Userprofil__form">
          <button
            type="button"
            className="UserProfil__form__buttonMyInfoOff"
            onClick={handleClick}
          >
            Mes infos
          </button>
        </section>
      )}

      <div className="UserProfil__myRecipes">
        <Link className="UserProfil__button__post" to="/add/recipe">
          Ajoute ta recette
        </Link>
        <h1 className="UserProfil__myRecipes__title">Mes postes</h1>
        <div className="UserProfil__myRecipes__Cards">
          {recipes.length > 0 ? (
            recipes.map((recipe) => {
              return (
                <RecipeCardUser
                  className="UserProfil__myRecipes__card"
                  key={`recipe:${recipe.id}`}
                  recipe={recipe}
                />
              );
            })
          ) : (
            <p className="UserProfil__myRecipes__noCard">
              Vous n'avez pas encore posté de recette
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default UserProfil;
