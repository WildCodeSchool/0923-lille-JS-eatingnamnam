const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const user = await tables.user.readAll();

    // Respond with the items in JSON format
    res.json(user);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const register = async (req, res, next) => {
  const myUser = req.body.data;
  const { hashedPassword } = req.body;

  try {
    const user = await tables.user.create(myUser, hashedPassword);
    res.json(user);
    /*     console.log("created user:", user); */
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  register,
};
