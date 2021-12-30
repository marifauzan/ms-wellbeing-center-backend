module.exports = (app) => {
  const result_from_question = require("../controllers/result_from_question");
  const router = require("express").Router();

  // Create a new result_from_question
  router.post("/", result_from_question.create);

  // Retrieve all result_from_question
  router.get("/", result_from_question.findAll);

  // Retrieve a single result_from_question with id
  router.get("/:id", result_from_question.findOne);

  // Update a result_from_question with id
  router.put("/:id", result_from_question.update);

  // Delete a result_from_question with id
  router.delete("/:id", result_from_question.delete);

  app.use("/result_from_question", router);
};
