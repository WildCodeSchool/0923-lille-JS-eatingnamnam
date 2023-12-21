import "./TitleBar.scss";

function TitleBar() {
  return (
    <header className="titleBar">
      <img
        className="titleBar__logo"
        name="logo"
        src="src/assets/Logo-nam-nam.png"
        alt="logo"
      />
      <img
        className="titleBar__userLogo"
        name="userLogo"
        src="src/assets/icone-user.svg"
        alt="userLogo"
      />
    </header>
  );
}

export default TitleBar;
