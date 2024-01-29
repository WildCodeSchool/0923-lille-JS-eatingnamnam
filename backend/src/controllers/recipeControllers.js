const tables = require("../tables");

const add = async (req, res, next) => {
  const { title, stepsArr, ingredientArr } = req.body;
  const { time, price, difficulty, diet, type, season } = req.body.info;
  const userId = req.params.id;

  try {
    const newRecipeId = await tables.recipe.create(
      title,
      time,
      price,
      difficulty,
      userId,
      stepsArr,
      diet,
      type,
      season
    );

    //    console.log("insertId test test:", newRecipeId);
    // eslint-disable-next-line prefer-const
    for (let element of ingredientArr) {
      // console.log("boucle ingredient", element.ingredientName);

      // eslint-disable-next-line no-await-in-loop
      const ingredientId = await tables.ingredient.getByName(
        element.ingredientName
      );
      if (ingredientId == null) {
        res.sendStatus(404);
      } else {
        //  console.log("resultat ingredientIdByName ==>", ingredientId);

        element.ingredientId = ingredientId.id;
        //  console.log(element);
        tables.recipe.addIngredients(newRecipeId, element);
        //  console.log("element aprés ajout de l'id :", element);
      }
      // console.log("final ingredient list:", ingredientId);
    }
  } catch (err) {
    next(err);
  }
  // return insertId;
};

const uploadPicture = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }
    // Le nom du fichier stocké est accessible via req.file.filename
    const imageName = req.file.filename;
    return res
      .status(201)
      .send({ message: "Image uploaded successfully", filename: imageName });
  } catch (err) {
    next(err);
  }
  return undefined;
};

const browse = async (req, res, next) => {
  try {
    const recipe = await tables.recipe.readAll();

    res.json(recipe);
  } catch (err) {
    next(err);
  }
};

const recipeByFav = async (req, res, next) => {
  try {
    const recipe = await tables.recipe.recipeByFav(req.params.id);

    if (recipe == null) {
      res.sendStatus(404);
    } else {
      res.json(recipe);
    }
  } catch (err) {
    next(err);
  }
};

const recipeById = async (req, res, next) => {
  try {
    const recipe = await tables.recipe.recipeById(req.params.id);

    if (recipe == null) {
      res.sendStatus(404);
    } else {
      res.json(recipe);
    }
  } catch (err) {
    next(err);
  }
};

const deleteById = async (req, res, next) => {
  try {
    const recipe = await tables.recipe.delete(req.params.id);

    if (recipe == null) {
      res.sendStatus(404);
    } else {
      res.json(recipe);
    }
  } catch (err) {
    next(err);
  }
};

const randomRecipe = async (req, res, next) => {
  try {
    const recipe = await tables.recipe.randomRecipe();

    res.json(recipe);
  } catch (err) {
    next(err);
  }
};

const recipeByTag = async (req, res, next) => {
  try {
    const recipes = await tables.recipe.recipeByTag(req.params.id);

    if (recipes == null) {
      res.sendStatus(404);
    } else {
      res.json(recipes);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  add,
  browse,
  deleteById,
  randomRecipe,
  recipeByFav,
  recipeById,
  recipeByTag,
  uploadPicture,
};
