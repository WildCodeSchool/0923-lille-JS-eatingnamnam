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

const readById = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const user = await tables.user.read(req.params.id);

    // Respond with the items in JSON format
    res.json(user);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const readByCookieId = async (req, res, next) => {
  console.error("read by ID reqbody ===>", req.idUser);
  try {
    const user = await tables.user.read(req.idUser);
    res.json(user);
  } catch (error) {
    next();
  }
};

const getCurrentUser = async (req, res, next) => {
  try {
    const [user] = await tables.user.getById(req.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

const getUser = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const user = await tables.user.readByEmail();

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
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  getCurrentUser,
  getUser,
  register,
  readById,
  readByCookieId,
};
