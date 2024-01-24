const jwt = require("jsonwebtoken");

const authorize = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return res.sendStatus(401);

  try {
    const decoded = jwt.verify(token, process.env.JWT_AUTH_SECRET);
    req.idUser = decoded.id;
    req.roleUser = decoded.role;
    next();
  } catch (error) {
    res.sendStatus(401);
  }
  return res.status;
};

const isAdmin = (req, res, next) => {
  if (req.roleUser === "ROLE_ADMIN") next();
  else res.sendStatus(403);
};

module.exports = { authorize, isAdmin };
