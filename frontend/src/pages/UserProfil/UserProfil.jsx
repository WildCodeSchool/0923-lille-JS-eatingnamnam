/* eslint-disable react/button-has-type */
import "./UserProfil.scss";

function UserProfil() {
  return (
    <>
      <img
        className="UserProfil__img"
        src="src/assets/PlateauFromageProfil.jpg"
        alt="a magnifying glass icon"
      />
      <h1 className="UserProfil__name">User Profil</h1>
      <h4 className="UserProfil__myInfo">Mes infos</h4>
      <form className="UserProfil__info" action="#" method="post">
        <label className="UserProfil__pseudo__text" htmlFor="pseudo">
          Pseudo:
        </label>
        <input className="UserProfil__pseudo__input" type="text" />
        <label
          className="UserProfil__anniversaire__text"
          htmlFor="anniversaire"
        >
          Anniversaire:
        </label>
        <input className="UserProfil__anniversaire__input" type="text" />
        <label className="UserProfil__nom__text" htmlFor="nom">
          Nom:
        </label>
        <input className="UserProfil__nom__input" type="text" />
        <label className="UserProfil__prenom__text" htmlFor="prenom">
          Prénom:
        </label>
        <input className="UserProfil__prenom__input" type="text" />
        <label className="UserProfil__mail__text" htmlFor="email">
          Email:
        </label>
        <input className="UserProfil__mail__input" type="text" />
      </form>
      <button className="UserProfil__button__post" type="button">
        Créer un post +
      </button>
    </>
  );
}

export default UserProfil;
