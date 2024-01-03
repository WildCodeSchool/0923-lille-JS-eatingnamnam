const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const ustensil = await tables.ustensil.readAll();

    // Respond with the items in JSON format
    res.json(ustensil);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  browse,
};
