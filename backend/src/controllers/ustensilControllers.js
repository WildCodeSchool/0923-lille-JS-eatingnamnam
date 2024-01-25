const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const ustensil = await tables.ustensil.readAll();

    // Respond with the items in JSON format
    res.json(ustensil);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const utensilByRecipeId = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const utensil = await tables.ustensil.utensilByRecipeId(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the itsem in JSON format
    if (utensil == null) {
      res.sendStatus(404);
    } else {
      res.json(utensil);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
module.exports = {
  browse,
  utensilByRecipeId,
};
