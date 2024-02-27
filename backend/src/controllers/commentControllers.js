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
  const { recipeId, userId, grade, comment } = req.body;
  try {
    const insertId = await tables.comment_recipe_user.create(
      recipeId,
      userId,
      grade,
      comment
    );
    res.status(201).json({ insertId });
  } catch (err) {
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
