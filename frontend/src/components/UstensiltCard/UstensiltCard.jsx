import "./UstensiltCard.scss";
import PropTypes from "prop-types";

function UstensiltCard({ name, img }) {
  return (
    <>
      <div className="UstensiltCard">
        <img src={`${import.meta.env.VITE_BACKEND_URL}${img}`} alt={name} />
        <p>{name}</p>
      </div>
      );
    </>
  );
}
UstensiltCard.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default UstensiltCard;
