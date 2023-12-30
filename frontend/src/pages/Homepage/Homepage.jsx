import "./Homepage.scss";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import Carousels from "../../components/Carousel/Carousels";

function Homepage() {
  return (
    <>
      <RecipeCard />
      <h1 className="helloHome">HELLO HOMEPAGE</h1>
      <Carousels />
    </>
  );
}

export default Homepage;
