import "./TitleBar.scss";
import { Link } from "react-router-dom";

function TitleBar() {
  return (
    <header className="titleBar">
      <img
        className="titleBar__logo"
        name="logo"
        src="src/assets/Logo-nam-nam.png"
        alt="logo"
      />
      <Link to="/" className="titleBar__userLogo" type="submit">
        <img name="userLogo" src="src/assets/icone-user.svg" alt="userLogo" />
      </Link>
    </header>
  );
}

export default TitleBar;
