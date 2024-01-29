const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const comments = await tables.comment_recipe_user.readAll();
    res.json(comments);
  } catch (err) {
    next(err);
  }
};

const addComments = async (req, res, next) => {
  // Extract the item data from the request body
  const { recipeId, userId, grade, comment } = req.body;
  try {
    // Insert the item into the database
    const insertId = await tables.comment_recipe_user.create(
      recipeId,
      userId,
      grade,
      comment
    );

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const commentByRecipeId = async (req, res, next) => {
  try {
    const comments = await tables.comment_recipe_user.read(req.params.id);
    res.json(comments);
  } catch (err) {
    next(err);
  }
};

const rating = async (req, res, next) => {
  try {
    const grade = await tables.comment_recipe_user.averageRating(
      req.params.recipeID
    );
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
  addComments,
  browse,
  rating,
  commentByRecipeId,
};
