import "./Authentication.scss";
import LoginForm from "../../components/LoginForm/LoginForm";

function Authentication() {
  return (
    <section
      className="formLogin"
      style={{ backgroundImage: "URL(src/assets/loginPage.svg)" }}
    >
      <LoginForm />
    </section>
  );
}

export default Authentication;
