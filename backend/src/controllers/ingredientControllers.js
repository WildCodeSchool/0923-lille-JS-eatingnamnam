const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const recipe = await tables.ingredient.readAll();

    // Respond with the items in JSON format
    res.json(recipe);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
const ingredientListByRecipId = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const ingredientList = await tables.ingredient.ingredientListByRecipId(
      req.params.id
    );

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (ingredientList == null) {
      res.sendStatus(404);
    } else {
      res.json(ingredientList);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  browse,
  ingredientListByRecipId,
};
