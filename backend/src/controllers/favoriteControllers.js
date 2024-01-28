const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const favList = await tables.list_favorites_recipe_user.readAll();

    // Respond with the items in JSON format
    res.json(favList);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
const deleteFav = async (req, res, next) => {
  const userId = req.params.userid;
  const recipeId = req.params.recipeid;

  try {
    // Fetch all items from the database
    const favToDelete = await tables.list_favorites_recipe_user.delete(
      userId,
      recipeId
    );

    // Respond with the items in JSON format
    res.json(favToDelete);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = { browse, deleteFav };
