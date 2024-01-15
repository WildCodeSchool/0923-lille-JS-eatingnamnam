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
      <section className="Userprofil__form">
        <h4 className="UserProfil__myInfo">Mes infos</h4>

        <form className="UserProfil__info" action="#" method="post">
          <section className="UserProfil__pseudo">
            <label className="" htmlFor="pseudo">
              Pseudo:
              <input
                id="pseudo"
                className="UserProfil__pseudo__input"
                type="text"
              />
            </label>
          </section>

          <section className="UserProfil__anniversaire">
            <label className="" htmlFor="anniversaire">
              Anniversaire:
              <input
                id="anniversaire"
                className="UserProfil__anniversaire__input"
                type="text"
              />
            </label>
          </section>
          <section className="UserProfil__nom">
            <label className="testLabel" htmlFor="nom">
              Nom:
              <input id="nom" className="UserProfil__nom__input" type="text" />
            </label>
          </section>
          <section className="UserProfil__prenom">
            <label className="" htmlFor="prenom">
              Prénom:
              <input
                id="prenom"
                className="UserProfil__prenom__input"
                type="text"
              />
            </label>
          </section>
          <section className="UserProfil__mail">
            <label className="" htmlFor="email">
              Email:
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

      <h1 className="UserProfil__post__fav">Mes favorits</h1>
    </>
  );
}

export default UserProfil;
