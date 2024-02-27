const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const ustensil = await tables.ustensil.readAll();
    res.json(ustensil);
  } catch (err) {
    next(err);
  }
};

const utensilByRecipeId = async (req, res, next) => {
  try {
    const utensil = await tables.ustensil.utensilByRecipeId(req.params.id);
    if (utensil == null) {
      res.sendStatus(404);
    } else {
      res.json(utensil);
    }
  } catch (err) {
    next(err);
  }
};
module.exports = {
  browse,
  utensilByRecipeId,
};
