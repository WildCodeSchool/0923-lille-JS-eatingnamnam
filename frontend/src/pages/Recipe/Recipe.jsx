import "./Recipe.scss";
import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RecipeInfo from "../../components/RecipeInfo/RecipeInfo";
import IngredientCard from "../../components/IngredientCard/IngredientCard";
import AddComment from "../../components/AddComment/AddComment";
import RecipeStep from "../../components/RecipeStep/RecipeStep";
import UstensiltCard from "../../components/UtensilCard/UtensilCard";
import CommentCard from "../../components/CommentCard/CommentCard";
import { UserContext } from "../../components/Contexts/userContext";

function Recipe() {
  const navigate = useNavigate();
  const { auth } = useContext(UserContext);
  const [recipe, setRecipe] = useState();
  const { recipeId } = useParams();
  const [ingredientList, setIngredientList] = useState();
  const [utensils, setUtensils] = useState();
  const [comments, setComments] = useState();
  const [steps, setSteps] = useState();
  const [tab, setTab] = useState(1);
  const [ingredientIsActive, setIngredientIsActive] = useState(1);
  const [ustensilIsActive, setUstensilIsActive] = useState(0);
  const [stepIsActive, setStepIsActive] = useState(0);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/recipe/${recipeId}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data))
      .catch((error) => console.error(error));

    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/recipe/${recipeId}/ingredients`
    )
      .then((response) => response.json())
      .then((data) => setIngredientList(data))
      .catch((error) => console.error(error));

    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/recipe/${recipeId}/utensils`)
      .then((response) => response.json())
      .then((data) => setUtensils(data))
      .catch((error) => console.error(error));

    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/recipe/${recipeId}/comments`)
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error(error));

    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/recipe/${recipeId}/steps`)
      .then((response) => response.json())
      .then((data) => setSteps(data))
      .catch((error) => console.error(error));
  }, []);

  const handleCLickIngredient = () => {
    setTab(1);
    setIngredientIsActive(1);
    setUstensilIsActive(0);
    setStepIsActive(0);
  };
  const handleClickUstensil = () => {
    setTab(2);
    setIngredientIsActive(0);
    setUstensilIsActive(1);
    setStepIsActive(0);
  };

  const handleClickSteps = () => {
    setTab(3);
    setIngredientIsActive(0);
    setUstensilIsActive(0);
    setStepIsActive(1);
  };
  const handleDelete = () => {
    try {
      fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/recipe/${recipeId}/delete`,
        { method: "delete" }
      );
    } catch (error) {
      console.error(error);
    }
    navigate("/");
    /*     console.log("coucou delete"); */
  };

  return (
    <div className="page">
      {auth.isLogged === true ? (
        <button type="submit" onClick={handleDelete}>
          {" "}
          click to delete
        </button>
      ) : (
        ""
      )}

      {recipe ? <RecipeInfo recipe={recipe} id={recipe.id} /> : "loading"}

      <main className="recipe__cardContainer">
        <nav className="recipe__buttonBar">
          <button
            type="submit"
            className={
              ingredientIsActive ? "button__Focus" : "recipe__navButton"
            }
            onClick={handleCLickIngredient}
          >
            Ingrédients
          </button>
          <button
            type="submit"
            className={ustensilIsActive ? "button__Focus" : "recipe__navButton"}
            onClick={handleClickUstensil}
          >
            Ustensiles
          </button>
          <button
            type="submit"
            className={stepIsActive ? "button__Focus" : "recipe__navButton"}
            onClick={handleClickSteps}
          >
            Préparation
          </button>
        </nav>
        <section className="ingredientsList">
          {tab === 1 && ingredientList
            ? ingredientList.map((ingredient) => (
                <IngredientCard
                  key={`ingredient:${ingredient.id}`}
                  ingredient={ingredient}
                />
              ))
            : ""}
        </section>
        <section className="utensilsList">
          {tab === 2 && utensils
            ? utensils.map((utensil) => (
                <UstensiltCard
                  key={`ustensil:${utensil.id}`}
                  name={utensil.name}
                  img={utensil.picture}
                />
              ))
            : ""}
        </section>
        {tab === 3 && steps
          ? steps.map((step) => (
              <RecipeStep
                key={`step:${step.id}`}
                recipeStep={step.description}
                stepNumber={step.number_step}
              />
            ))
          : ""}
        {ingredientList && utensils && comments ? <AddComment /> : ""}

        {comments
          ? comments.map((comment) => (
              <CommentCard
                key={`comment:${comment.id}`}
                comment={comment}
                recipe={recipe}
                id={recipe.id}
              />
            ))
          : ""}
      </main>
    </div>
  );
}

export default Recipe;
