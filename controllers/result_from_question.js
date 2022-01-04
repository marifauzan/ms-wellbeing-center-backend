const db = require("../models");
const ResultFromQuestion = db.result_from_questions;

exports.findAll = (req, res) => {
  const total_score = req.query.total_score;
  let condition = total_score
    ? { total_score: { $regex: new RegExp(total_score), $options: "i" } }
    : {};

  ResultFromQuestion.find(condition)
    .populate({
      path: "users",
      select: "username",
      populate: {
        path: "result_parameter",
        select: "condition",
      },
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
        message:
          err.message ||
          "Some error occured while retrieving ResultFromQuestions ",
        data: {},
      });
    });
};

exports.create = (req, res) => {
  if (!req.body.total_score) {
    res
      .status(400)
      .send({ success: false, message: "Content can not be empty!" });
    return;
  }

  ResultFromQuestion.create(req.body)
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
          err.message ||
          "Some error occured while creating the ResultFromQuestions",
        data: {},
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  ResultFromQuestion.findById(id)
    .populate({
      path: "answers",
      select: "answer",
    })
    .then((data) => {
      if (!data)
        res.status(404).send({
          success: false,
          message: "Not found ResultFromQuestions with id " + id,
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
        message: "Error retrieving ResultFromQuestions with id=" + id,
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

  ResultFromQuestion.findByIdAndUpdate(id, req.body, {
    useFindAndModify: false,
  })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          success: false,
          message: `Cannot update ResultFromQuestions with id=${id}. Maybe ResultFromQuestions was not found!`,
          data: {},
        });
      } else
        res.send({
          success: true,
          message: "ResultFromQuestions was updated successfuly.",
        });
    })
    .catch((err) => {
      res.status(500).send({
        success: false,
        message: "Error updating ResultFromQuestions with id=" + id,
        data: {},
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  ResultFromQuestion.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          success: false,
          message: `Cannot delete ResultFromQuestions with id=${id}. Maybe ResultFromQuestions was not found!`,
          data: {},
        });
      } else {
        res.send({
          success: true,
          message: "ResultFromQuestions was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        success: false,
        message: "Could not delete ResultFromQuestions with id=" + id,
        data: {},
      });
    });
};
