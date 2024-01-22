const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const tables = require("../tables");

const login = async (req, res, next) => {
  //  console.log("inside authcontroller login");
  try {
    const user = await tables.user.readByEmailWithPassword(req.body.data.mail);
    if (user == null) {
      res.sendStatus(422);
      //  console.log("bad user or password");
      return;
    }
    const verified = await argon2.verify(user.password, req.body.data.password);
    if (verified) {
      //   console.log("inside user verified");
      // Respond with the user and a signed token in JSON format (but without the hashed password)
      delete user.hashed_password;
      /* console.log("user verified gg !!!!"); */
      const token = await jwt.sign(
        { sub: user.id, isAdmin: user.isAdmin },
        process.env.APP_SECRET,
        {
          expiresIn: "1h",
        }
      );
      res.cookie("access_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      });
      //     console.log("token?", token);
      // console.log("Cookies: ", req.cookies);
      res.status(200).json({ email: user.email, id: user.id, role: user.role });
      // console.log("response:", user.email, user.id, user.role);
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    next();
  }
};
module.exports = {
  login,
};
