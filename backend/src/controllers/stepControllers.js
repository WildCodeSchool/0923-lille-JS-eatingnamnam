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

const add = async (req, res, next) => {
  // Extract the item data from the request body
  const step = req.body;
  console.warn("step:", step);
  try {
    // Insert the item into the database
    const insertStep = await tables.step.create(step);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertStep });
  } catch (err) {
    console.warn("controller error");
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  browse,
  stepByRecipeId,
  add,
};
