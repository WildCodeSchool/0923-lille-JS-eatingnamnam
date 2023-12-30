import React from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./Carousels.scss";
import RecipeCard from "../RecipeCard/RecipeCard";

// eslint-disable-next-line react/prefer-stateless-function
class Carousels extends React.Component {
  render() {
    return (
      <CarouselProvider
        className="CarouselProvider"
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={4}
        visibleSlides={1.25}
        infinite
      >
        <Slider className="slider">
          <Slide className="slide" index={0} style={{ paddingBottom: "20%" }}>
            <RecipeCard />
          </Slide>
          <Slide className="slide" index={1} style={{ paddingBottom: "20%" }}>
            <RecipeCard />
          </Slide>
          <Slide className="slide" index={2} style={{ paddingBottom: "20%" }}>
            <RecipeCard />
          </Slide>
          <Slide className="slide" index={3} style={{ paddingBottom: "20%" }}>
            <RecipeCard />
          </Slide>
        </Slider>
      </CarouselProvider>
    );
  }
}

export default Carousels;
