const tables = require("../tables");

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
  browse,
  deleteById,
  randomRecipe,
  recipeByFav,
  recipeById,
  recipeByTag,
  uploadPicture,
};
