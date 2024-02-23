const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const tables = require("../tables");

const login = async (req, res, next) => {
  try {
    const user = await tables.user.readByEmail(req.body.data.mail);
    console.info(" auth controller // my user info:", user);
    if (user == null) {
      res.sendStatus(422);
      return;
    }
    const verified = await argon2.verify(user.password, req.body.data.password);
    if (verified) {
      // Respond with the user and a signed token in JSON format (but without the hashed password)
      delete user.password;
      const accessToken = jwt.sign(
        { sub: user.id, role: user.role },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "1h",
        }
      );

      res.cookie("jwt", accessToken, {
        httpOnly: true,
        maxAge: 60 * 60 * 1000,
        secure: true,
        sameSite: "none",
      });
      res.status(200).json({
        email: user.email,
        id: user.id,
        pseudo: user.pseudo,
        role: user.role,
      });
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    console.error(err);
    next();
  }
};

const logout = ({ res }) => {
  res.clearCookie("jwt").sendStatus(200);
};
module.exports = {
  login,
  logout,
};
