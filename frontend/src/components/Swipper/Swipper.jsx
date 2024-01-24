// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import SwiperRecipeCard from "../SwiperRecipeCard/SwiperRecipeCard";

// Import Swiper styles
/* eslint-disable import/no-unresolved */
import "swiper/css";
import "swiper/css/pagination";
import "./Swipper.scss";

function Swipper({ recipes }) {
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
