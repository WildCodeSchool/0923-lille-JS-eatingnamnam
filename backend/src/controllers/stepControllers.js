const tables = require("../tables");

const stepByRecipeId = async (req, res, next) => {
  try {
    const steps = await tables.step.read(req.params.id);
    if (steps == null) {
      res.sendStatus(404);
    } else {
      res.json(steps);
    }
  } catch (err) {
    next(err);
  }
};

const browse = async (req, res, next) => {
  try {
    const steps = await tables.step.readAll();
    if (steps == null) {
      res.sendStatus(404);
    } else {
      res.json(steps);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const step = req.body;
  try {
    const insertStep = await tables.step.create(step);
    res.status(201).json({ insertStep });
  } catch (err) {
    console.warn("controller error");
    next(err);
  }
};

module.exports = {
  browse,
  stepByRecipeId,
  add,
};
