const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const recipe = await tables.ingredient.readAll();
    res.json(recipe);
  } catch (err) {
    next(err);
  }
};
const ingredientListByRecipId = async (req, res, next) => {
  try {
    const ingredientList = await tables.ingredient.ingredientListByRecipId(
      req.params.id
    );

    if (ingredientList == null) {
      res.sendStatus(404);
    } else {
      res.json(ingredientList);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  ingredientListByRecipId,
};
