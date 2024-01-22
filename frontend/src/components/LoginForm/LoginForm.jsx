/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line import/no-extraneous-dependencies
/* import { useState } from "react"; */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
/* import { UserContext } from "../Contexts/userContext"; */

function LoginForm() {
  const { register, handleSubmit } = useForm();
  const [auth, setAuth] = useState();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    try {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/login`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data,
        }),
      }).then((response) => {
        if (response.status === 200) {
          setAuth({ user: data.mail, isLogged: true });
          console.warn(auth);
          navigate("/");
        } else console.error("Wrong password or email");
      });
    } catch (error) {
      console.error("error:", error);
    }
  };

  return (
    <form className="formLogin__inputs" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="mail" className="formLogin__label">
        Adresse mail
        <input
          id="mail"
          className="formLogin__inputs__text"
          type="mail"
          {...register("mail", { required: true }, { type: "email" })}
          placeholder="azerty@gmail.com"
        />
      </label>
      <label htmlFor="password" className="formLogin__label">
        Mot de passe
        <input
          id="password"
          className="formLogin__inputs__text"
          {...register("password", { required: true })}
          type="password"
          placeholder="Mot de passe"
        />
      </label>
      <input
        className="formLogin__inputs__submit"
        type="submit"
        value="Connexion"
      />
    </form>
  );
}

export default LoginForm;
