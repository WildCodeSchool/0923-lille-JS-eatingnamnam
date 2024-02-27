const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const user = await tables.user.readAll();
    res.json(user);
  } catch (err) {
    next(err);
  }
};

const readById = async (req, res, next) => {
  try {
    const user = await tables.user.read(req.params.id);
    res.json(user);
  } catch (err) {
    next(err);
  }
};

const readByCookieId = async (req, res, next) => {
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
    const user = await tables.user.readByEmail();
    res.json(user);
  } catch (err) {
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
