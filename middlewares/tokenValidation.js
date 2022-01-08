require("dotenv").config();
const jwt = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const auth = req.headers.authorization;
  const token = auth.split(" ")[1];

  if (token) {
    try {
      const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

      req.payload = payload;

      next();
    } catch (error) {
      res.json("token invalid");
    }
  }
};

module.exports = validateToken;
