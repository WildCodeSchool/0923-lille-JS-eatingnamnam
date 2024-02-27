const tables = require("../tables");

const add = async (req, res, next) => {
  const { title, stepsArr, ingredientArr } = req.body;
  const { time, price, difficulty, share, diet, type, season } = req.body.info;
  const userId = req.params.id;

  try {
    const newRecipeId = await tables.recipe.create(
      title,
      time,
      price,
      difficulty,
      share,
      userId,
      stepsArr,
      diet,
      type,
      season
    );

    for (const element of ingredientArr) {
      // eslint-disable-next-line no-await-in-loop
      const ingredientId = await tables.ingredient.getByName(
        element.ingredientName
      );
      if (ingredientId == null) {
        res.sendStatus(404);
      } else {
        element.ingredientId = ingredientId.id;
        tables.recipe.addIngredients(newRecipeId, element);
      }
    }
    res.json(newRecipeId);
  } catch (err) {
    next(err);
  }
};

const uploadPic = async (req, res, next) => {
  const recipeId = req.params.id;
  try {
    if (!req.file) {
      return res.status(400);
    }
    const imageName = req.file.filename;
    const originalName = req.file.originalname;
    const update = await tables.recipe.updatePic(
      recipeId,
      imageName,
      originalName
    );
    console.warn(update);
    return res.status(201);
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
const recipeByUserId = async (req, res, next) => {
  try {
    const recipe = await tables.recipe.recipeByUserId(req.params.id);

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
  recipeByUserId,
  uploadPic,
};
