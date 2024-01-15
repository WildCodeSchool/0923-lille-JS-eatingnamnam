/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from "react-hook-form";

function InscriptionForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.warn(data);
  return (
    <form className="formInscription__inputs" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="formInscription__inputs__text"
        type="text"
        {...register("firstname", { required: true })}
        placeholder=" Prénom"
      />
      <input
        className="formInscription__inputs__text"
        {...register("lastname", { required: true })}
        type="text"
        placeholder=" Nom"
      />
      <input
        className="formInscription__inputs__text"
        type="text"
        {...register("Pseudo", { required: true })}
        placeholder=" Pseudo"
      />
      <input
        className="formInscription__inputs__text"
        type="mail"
        {...register("mail", { required: true }, { type: "email" })}
        placeholder=" azerty@gmail.com"
      />
      <input
        className="formInscription__inputs__text"
        {...register("password", { required: true })}
        type="password"
        placeholder=" Mot de passe"
      />
      <input
        className="formInscription__inputs__text"
        {...register("birthdate", { required: true }, { type: "date" })}
        type="date"
        placeholder=" Date de naissance"
      />

      <input
        className="formInscription__inputs__submit"
        type="submit"
        value="Connexion"
      />
    </form>
  );
}

export default InscriptionForm;
