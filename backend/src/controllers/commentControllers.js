const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const comments = await tables.comment_recipe_user.readAll();

    // Respond with the items in JSON format
    res.json(comments);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const rating = async (req, res, next) => {
  try {
    // const grade = await tables.comment_recipe_user.averageRating();
    // res.json(grade);
    const grade = await tables.comment_recipe_user.averageRating(
      req.params.recipeID
    );
    res.json(grade);
    if (grade == null) {
      res.sendStatus(404);
    } else {
      res.json(grade);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  rating,
};
