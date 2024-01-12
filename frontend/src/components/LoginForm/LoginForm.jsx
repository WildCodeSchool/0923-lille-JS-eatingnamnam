/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from "react-hook-form";

function LoginForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.warn(data);
  return (
    <form className="formLogin__inputs" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="formLogin__inputs__text"
        type="mail"
        {...register("mail", { required: true }, { type: "email" })}
        placeholder=" azerty@gmail.com"
      />
      <input
        className="formLogin__inputs__text"
        {...register("password", { required: true })}
        type="password"
        placeholder=" Mot de passe"
      />
      <input
        className="formLogin__inputs__submit"
        type="submit"
        value="Connexion"
      />
    </form>
  );
}

export default LoginForm;
