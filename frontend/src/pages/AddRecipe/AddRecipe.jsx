import "./AddRecipe.scss";

function AddRecipe() {
  return (
    <main>
      <h1 className="helloRecipe">CREE TA RECETTE</h1>
      <label htmlFor="vege">
        Végétarien <imput type="checkbox" name="vegetarian" id="vege" />
      </label>
    </main>
  );
}

export default AddRecipe;
