import "./Titrelogo.scss";

function Titrelogo() {
  return (
    <header className="titrelogo">
      <img
        className="titrelogo__logo"
        name="logo"
        src="src/assets/Logo-nam-nam.png"
        alt="logo"
      />
      <img
        className="titrelogo__logoUser"
        name="logoUser"
        src="src/assets/icone-user.svg"
        alt="logoUser"
      />
    </header>
  );
}

export default Titrelogo;
