module.exports = (app) => {
  const users = require("../controllers/users");
  const router = require("express").Router();

  router.post("/login", users.login);

  router.post("/register", users.register);

  app.use(router);
};
