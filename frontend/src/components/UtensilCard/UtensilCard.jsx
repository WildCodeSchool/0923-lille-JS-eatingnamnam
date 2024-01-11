import "./UtensilCard.scss";
import PropTypes from "prop-types";

function UtensilCard({ name, img }) {
  return (
    <div className="UtensilCard">
      <img
        className="UtensilCard__img"
        src={`${import.meta.env.VITE_BACKEND_URL}${img}`}
        alt={name}
      />
      <p className="UtensilCard__name">{name}</p>
    </div>
  );
}
UtensilCard.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default UtensilCard;
