const jwt = require("jsonwebtoken");

const authorize = (req, res, next) => {
  const myCookieToken = req.headers.cookie;
  const token = myCookieToken.split("jwt=")[1];
  if (!token) return res.sendStatus(401);

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.idUser = decoded.sub;
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
