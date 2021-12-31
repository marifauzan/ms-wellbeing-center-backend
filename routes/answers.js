module.exports = (app) => {
  const answers = require("../controllers/answers");
  const router = require("express").Router();

  // Create a new answers
  router.post("/", answers.create);

  // Retrieve all answers
  router.get("/", answers.findAll);

  // Retrieve a single answers with id
  router.get("/:id", answers.findOne);

  // Update a answers with id
  router.put("/:id", answers.update);

  // Delete a answers with id
  router.delete("/:id", answers.delete);

  app.use("/answers", router);
};
