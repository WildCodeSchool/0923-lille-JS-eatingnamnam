import "./Homepage.scss";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import Swipper from "../../components/Swipper/Swipper";

function Homepage() {
  return (
    <>
      <RecipeCard />
      <h1 className="helloHome">HELLO HOMEPAGE</h1>;
      <Swipper />
    </>
  );
}

export default Homepage;
