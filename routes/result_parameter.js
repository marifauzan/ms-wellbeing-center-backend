module.exports = (app) => {
  const result_parameter = require("../controllers/result_parameter");
  const router = require("express").Router();

  // Create a new result_parameter
  router.post("/", result_parameter.create);

  // Retrieve all result_parameter
  router.get("/", result_parameter.findAll);

  // Retrieve a single result_parameter with id
  router.get("/:id", result_parameter.findOne);

  // Update a result_parameter with id
  router.put("/:id", result_parameter.update);

  // Delete a result_parameter with id
  router.delete("/:id", result_parameter.delete);

  app.use("/result_parameter", router);
};
