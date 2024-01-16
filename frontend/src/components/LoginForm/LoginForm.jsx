/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from "react-hook-form";

function LoginForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/login`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data,
      }),
    });
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
