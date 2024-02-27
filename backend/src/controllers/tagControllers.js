const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const recipe = await tables.tag.readAll();
    res.json(recipe);
  } catch (err) {
    next(err);
  }
};

const browseByTag = async (req, res, next) => {
  try {
    const recipe = await tables.tag.readAllTags();
    res.json(recipe);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  browseByTag,
};
