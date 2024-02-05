/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function InscriptionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    try {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/adduser`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data,
        }),
      }).then((response) =>
        response.status === 200
          ? Swal.fire({
              title: "Inscription complète",
              text: "Utilisez le bouton <Se connecter> pour vous authentifier",
              icon: "success",
            })
          : Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            })
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="formInscription__inputs" onSubmit={handleSubmit(onSubmit)}>
      <label className="formInscription__label">
        Votre prénom
        <input
          className="formInscription__inputs__text"
          type="text"
          {...register("firstname", {
            required: "Votre prénom est obligatoire",
          })}
          placeholder=" Prénom"
        />
        {errors.firstname && (
          <p style={{ color: "red" }}>Le champ Prénom est obligatoire</p>
        )}
      </label>

      <label className="formInscription__label">
        Votre nom
        <input
          className="formInscription__inputs__text"
          {...register("lastname", { required: true })}
          type="text"
          placeholder=" Nom"
        />
        {errors.lastname && (
          <p style={{ color: "red" }}>Le champ Nom est obligatoire</p>
        )}
      </label>
      <label className="formInscription__label">
        Votre Pseudo
        <input
          className="formInscription__inputs__text"
          type="text"
          {...register("pseudo", { required: true })}
          placeholder=" Pseudo"
        />
        {errors.pseudo && (
          <p style={{ color: "red" }}>Le champ Pseudo est obligatoire</p>
        )}
      </label>
      <label className="formInscription__label">
        Votre email
        <input
          className="formInscription__inputs__text"
          type="email"
          {...register(
            "email",
            {
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            },
            { type: "email" }
          )}
          placeholder=" azerty@gmail.com"
        />
        {errors.email && (
          <p style={{ color: "red" }}>
            Le champ Email est obligatoire et valide
          </p>
        )}
      </label>
      <label className="formInscription__label">
        Mot de passe
        <input
          className="formInscription__inputs__text"
          {...register("password", { required: true, minLength: 8 })}
          type="password"
          placeholder=" Mot de passe"
        />
        {errors.password && (
          <p style={{ color: "red" }}>
            Votre mot de passe doit faire plus de 8 caractères
          </p>
        )}
      </label>
      <label className="formInscription__label">
        Votre date de naissance
        <input
          className="formInscription__inputs__text"
          {...register("birthdate", { required: true }, { type: "date" })}
          type="date"
          placeholder=" Date de naissance"
        />
        {errors.birthdate && (
          <p style={{ color: "red" }}>
            Votre date de naissance est obligatoire
          </p>
        )}
      </label>
      <button className="formInscription__inputs__submit" type="submit">
        Inscription
      </button>
      <p>
        Souhaitez-vous continuer sans vous connecter ?{" "}
        <Link to="/"> Cliquez ici</Link>
      </p>
    </form>
  );
}

export default InscriptionForm;
