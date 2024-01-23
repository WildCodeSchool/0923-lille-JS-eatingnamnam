/* eslint-disable react/jsx-props-no-spreading */
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Contexts/userContext";

function LoginForm() {
  const { register, handleSubmit } = useForm();
  const { setAuth } = useContext(UserContext);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.warn("data:", data);
    try {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/login`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data,
        }),
      })
        .then((response) => response.json())
        .then(
          (fetchedData) =>
            setAuth({
              mail: fetchedData.email,
              id: fetchedData.id,
              pseudo: fetchedData.pseudo,
              role: "admin",
              isLogged: true,
            }),
          navigate("/")
        );
      /*  .then((response) => {
          if (response.status === 200) {
            console.warn("auth after loging:", auth);
            // navigate("/");
          } else console.error("Wrong password or email");
        }); */
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
