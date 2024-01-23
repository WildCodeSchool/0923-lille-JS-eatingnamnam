const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const tables = require("../tables");

const login = async (req, res, next) => {
  console.warn("inside authcontroller login");
  console.warn("body", req.body.data);
  console.warn("email", req.body.data.mail);
  console.warn("password", req.body.data.password);
  try {
    const user = await tables.user.readByEmail(req.body.data.mail);
    console.warn("user", user);
    if (user == null) {
      res.sendStatus(422);
      console.warn("bad user name");
      return;
    }
    const verified = await argon2.verify(user.password, req.body.data.password);
    if (verified) {
      console.warn("user verified");
      // Respond with the user and a signed token in JSON format (but without the hashed password)
      delete user.password;
      /* console.warn("user verified gg !!!!"); */
      const token = jwt.sign(
        { sub: user.id, isAdmin: user.isAdmin },
        process.env.APP_SECRET,
        {
          expiresIn: "1h",
        }
      );
      res.cookie("access_token", token, {
        /* sameSite: "None", */
        httpOnly: true,
        secure: false,
      });
      console.warn("token?", token);
      console.warn("Cookies: ", req.cookies);
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
    console.warn(err);
    next();
  }
};

const logout = ({ res }) => {
  res.clearCookie("access_token").sendStatus(200);
};
module.exports = {
  login,
  logout,
};
