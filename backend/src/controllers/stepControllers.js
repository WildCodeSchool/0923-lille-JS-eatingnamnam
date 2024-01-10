const tables = require("../tables");

const stepByRecipeId = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const steps = await tables.step.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (steps == null) {
      res.sendStatus(404);
    } else {
      res.json(steps);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const browse = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const steps = await tables.step.readAll();

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (steps == null) {
      res.sendStatus(404);
    } else {
      res.json(steps);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  browse,
  stepByRecipeId,
};
