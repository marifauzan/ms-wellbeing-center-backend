const db = require("../models");
const Question = db.questions;

exports.findAll = (req, res) => {
  const question = req.query.question;
  let condition = question
    ? { question: { $regex: new RegExp(question), $options: "i" } }
    : {};

  Question.find(condition)
    .populate({
      path: "answers",
      select: "answer",
    })
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
        message: err.message || "Some error occured while retrieving Questions ",
        data: {},
      });
    });
};

exports.create = (req, res) => {
  if (!req.body.question) {
    res
      .status(400)
      .send({ success: false, message: "Content can not be empty!" });
    return;
  }

  Question.create(req.body)
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
        message:
          err.message || "Some error occured while creating the Questions",
        data: {},
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Question.findById(id)
    .populate({
      path: "answers",
      select: "answer",
    })
    .then((data) => {
      if (!data)
        res.status(404).send({
          success: false,
          message: "Not found Questions with id " + id,
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
        message: "Error retrieving Questions with id=" + id,
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

  User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          success: false,
          message: `Cannot update Questions with id=${id}. Maybe Questions was not found!`,
          data: {},
        });
      } else
        res.send({
          success: true,
          message: "Questions was updated successfuly.",
        });
    })
    .catch((err) => {
      res.status(500).send({
        success: false,
        message: "Error updating Questions with id=" + id,
        data: {},
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  User.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          success: false,
          message: `Cannot delete Questions with id=${id}. Maybe Questions was not found!`,
          data: {},
        });
      } else {
        res.send({
          success: true,
          message: "Questions was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        success: false,
        message: "Could not delete Questions with id=" + id,
        data: {},
      });
    });
};
