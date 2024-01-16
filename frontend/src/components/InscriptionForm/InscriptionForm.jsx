/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from "react-hook-form";

function InscriptionForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/adduser`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data,
      }),
    });
  };

  return (
    <form className="formInscription__inputs" onSubmit={handleSubmit(onSubmit)}>
      <label className="formInscription__label">
        Votre prénom
        <input
          className="formInscription__inputs__text"
          type="text"
          {...register("firstname", { required: true })}
          placeholder=" Prénom"
        />
      </label>

      <label className="formInscription__label">
        Votre nom
        <input
          className="formInscription__inputs__text"
          {...register("lastname", { required: true })}
          type="text"
          placeholder=" Nom"
        />
      </label>
      <label className="formInscription__label">
        Votre Pseudo
        <input
          className="formInscription__inputs__text"
          type="text"
          {...register("Pseudo", { required: true })}
          placeholder=" Pseudo"
        />
      </label>
      <label className="formInscription__label">
        Votre email
        <input
          className="formInscription__inputs__text"
          type="mail"
          {...register("mail", { required: true }, { type: "email" })}
          placeholder=" azerty@gmail.com"
        />
      </label>
      <label className="formInscription__label">
        Mot de passe
        <input
          className="formInscription__inputs__text"
          {...register("password", { required: true })}
          type="password"
          placeholder=" Mot de passe"
        />
      </label>
      <label className="formInscription__label">
        Votre date de naissance
        <input
          className="formInscription__inputs__text"
          {...register("birthdate", { required: true }, { type: "date" })}
          type="date"
          placeholder=" Date de naissance"
        />
      </label>
      <input
        className="formInscription__inputs__submit"
        type="submit"
        value="Connexion"
      />
    </form>
  );
}

export default InscriptionForm;
