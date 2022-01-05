const db = require("../models");
const ResultParam = db.result_parameter;

exports.findAll = (req, res) => {
  const condition_parameter = req.query.condition_parameter;
  let condition = condition_parameter
    ? {
        condition_parameter: {
          $regex: new RegExp(condition_parameter),
          $options: "i",
        },
      }
    : {};

  ResultParam.find(condition)
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
          err.message || "Some error occured while retrieving ResultParam.",
        data: {},
      });
    });
};

exports.create = (req, res) => {
  if (!req.body.condition_parameter) {
    res
      .status(400)
      .send({ success: false, message: "Content can not be empty!" });
    return;
  }

  ResultParam.create(req.body)
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
          err.message || "Some error occured while creating the ResultParams",
        data: {},
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  ResultParam.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({
          success: false,
          message: "Not found ResultParam with id " + id,
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
        message: "Error retrieving ResultParams with id=" + id,
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

  ResultParam.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          success: false,
          message: `Cannot update ResultParams with id=${id}. Maybe ResultParams was not found!`,
          data: {},
        });
      } else
        res.send({
          success: true,
          message: "ResultParams was updated successfuly.",
        });
    })
    .catch((err) => {
      res.status(500).send({
        success: false,
        message: "Error updating ResultParams with id=" + id,
        data: {},
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  ResultParam.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          success: false,
          message: `Cannot delete ResultParams with id=${id}. Maybe ResultParams was not found!`,
          data: {},
        });
      } else {
        res.send({
          success: true,
          message: "ResultParams was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        success: false,
        message: "Could not delete ResultParams with id=" + id,
        data: {},
      });
    });
};
