import "./Authentication.scss";
import { useState } from "react";

// Components
import InscriptionForm from "../../components/InscriptionForm/InscriptionForm";
import LoginForm from "../../components/LoginForm/LoginForm";

/**
 * @returns  Authentication page component displaying the login and inscription forms
 */

function Authentication() {
  //  State hooks for switching between display of login or inscription form
  const [choose, setChoose] = useState("connection");

  //  Function to switch between display of login or inscription form
  const handleClick = (event) => {
    setChoose(event.target.name);
  };
  return (
    <section className="formLogin">
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
