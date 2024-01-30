// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import SwiperRecipeCard from "../SwiperRecipeCard/SwiperRecipeCard";

// Import Swiper styles
/* eslint-disable import/no-unresolved */
import "swiper/css";
import "swiper/css/pagination";
import "./Swipper.scss";

/**
 *
 * @param {recipes: array}  props - An array of recipe objects to be displayed in the swiper component.
 * @returns  A JSX component displaying a Swiper component with cards for each provided recipe object.
 */

function Swipper({ recipes }) {
  //  Set up parameters for Swiper
  const windowWidth = window.innerWidth;

  let test = 0;
  if (windowWidth <= 500) {
    test = 1.25;
  } else {
    test = 4;
  }
  return (
    <Swiper
      slidesPerView={test}
      spaceBetween={-30}
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
    >
      {recipes.map((recipe) => (
        <SwiperSlide style={{ height: "22em" }} key={recipe.title}>
          <SwiperRecipeCard recipe={recipe} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

Swipper.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Swipper;
