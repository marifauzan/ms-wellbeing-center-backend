const db = require("../models");
const Answer = db.answers;

exports.findAll = (req, res) => {
  const answer = req.query.answer;
  let condition = answer
    ? { answer: { $regex: new RegExp(answer), $options: "i" } }
    : {};

  Answer.find(condition)
    .then((data) => {
      res.send({
        success: true,
        message: "Data found",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        success: false,
        message: err.message || "Some error occured while retrieving Answers.",
        data: {},
      });
    });
};

exports.create = (req, res) => {
  if (!req.body.username) {
    res
      .status(400)
      .send({ success: false, message: "Content can not be empty!" });
    return;
  }

  Answer.create(req.body)
    .then((data) => {
      res.send({
        success: true,
        message: "Data has been Submitted successfully",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        success: false,
        message: err.message || "Some error occured while creating the Answers",
        data: {},
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Answer.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({
          success: false,
          message: "Not found Answers with id " + id,
        });
      else
        res.send({
          success: true,
          message: "Data found",
          data: data,
        });
    })
    .catch((err) => {
      res.status(500).send({
        success: false,
        message: "Error retrieving Answers with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      success: false,
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  Answer.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          success: false,
          message: `Cannot update Answers with id=${id}. Maybe Answers was not found!`,
          data: {},
        });
      } else
        res.send({
          success: true,
          message: "Answers was updated successfuly.",
        });
    })
    .catch((err) => {
      res.status(500).send({
        success: false,
        message: "Error updating Answers with id=" + id,
        data: {},
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Answer.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          success: false,
          message: `Cannot delete Answers with id=${id}. Maybe Answers was not found!`,
          data: {},
        });
      } else {
        res.send({
          success: true,
          message: "Answers was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        success: false,
        message: "Could not delete Answers with id=" + id,
        data: {},
      });
    });
};
