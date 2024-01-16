import { useState } from "react";
import "./Authentication.scss";
import InscriptionForm from "../../components/InscriptionForm/InscriptionForm";
import LoginForm from "../../components/LoginForm/LoginForm";

function Authentication() {
  const [choose, setChoose] = useState("connection");
  const handleClick = (event) => {
    setChoose(event.target.name);
  };
  return (
    <section
      className="formLogin"
      style={{ backgroundImage: "URL(src/assets/loginPage.svg)" }}
    >
      <div className="formLogin__Button">
        {choose === "connection" ? (
          <button
            className="active"
            type="button"
            name="connection"
            onClick={handleClick}
          >
            Se connecter
          </button>
        ) : (
          <button
            className="noActive"
            type="button"
            name="connection"
            onClick={handleClick}
          >
            Se connecter
          </button>
        )}

        {choose === "connection" ? (
          <button
            className="noActive"
            type="button"
            name="incription"
            onClick={handleClick}
          >
            Inscription
          </button>
        ) : (
          <button
            className="active"
            type="button"
            name="incription"
            onClick={handleClick}
          >
            Inscription
          </button>
        )}
      </div>
      {choose === "connection" ? <LoginForm /> : <InscriptionForm />}
    </section>
  );
}

export default Authentication;
