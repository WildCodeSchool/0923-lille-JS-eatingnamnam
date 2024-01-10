const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const comments = await tables.comment_recipe_user.readAll();
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
  browse,
  rating,
};
