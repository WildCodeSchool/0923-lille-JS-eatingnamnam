/* eslint-disable react/jsx-props-no-spreading */
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// import library to format the alert
import Swal from "sweetalert2";
import { UserContext } from "../Contexts/userContext";

/**
 *
 * @returns display a form to add new user in the database.
 */

function LoginForm() {
  const { register, handleSubmit } = useForm();
  //  get the current user data and setter function
  const { setAuth } = useContext(UserContext);
  const navigate = useNavigate();

  //  Function that send data to server and redirect if login is successful or not.
  const onSubmit = (data) => {
    try {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/login`, {
        method: "post",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Identifiant ou mot de passe incorrects",
            });
          }
          return response.json();
        })
        .then(
          (fetchedData) =>
            setAuth({
              mail: fetchedData.email,
              id: fetchedData.id,
              pseudo: fetchedData.pseudo,
              isLogged: true,
            }),
          navigate("/")
        );
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
          type="email"
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
