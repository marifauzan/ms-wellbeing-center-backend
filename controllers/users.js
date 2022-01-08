const db = require("../models");
const User = db.users;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.findAll = (req, res) => {
  const username = req.query.username;
  let condition = username
    ? { username: { $regex: new RegExp(username), $options: "i" } }
    : {};

  User.find(condition)
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
        message: err.message || "Some error occured while retrieving Users.",
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

  User.create(req.body)
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
        message: err.message || "Some error occured while creating the Users",
        data: {},
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({
          success: false,
          message: "Not found Users with id " + id,
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
        message: "Error retrieving Users with id=" + id,
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
          message: `Cannot update Users with id=${id}. Maybe Users was not found!`,
          data: {},
        });
      } else
        res.send({
          success: true,
          message: "Users was updated successfuly.",
        });
    })
    .catch((err) => {
      res.status(500).send({
        success: false,
        message: "Error updating Users with id=" + id,
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
          message: `Cannot delete Users with id=${id}. Maybe Users was not found!`,
          data: {},
        });
      } else {
        res.send({
          success: true,
          message: "Users was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        success: false,
        message: "Could not delete Users with id=" + id,
        data: {},
      });
    });
};

exports.login = async (req, res) => {
  try {
    const dataLogin = req.body;
    const user = await User.findOne({ email: dataLogin.email });

    if (user) {
      const validatePassword = bcrypt.compareSync(
        dataLogin.password,
        user.password
      );

      if (validatePassword) {
        const { password, ...rest } = user.toObject();
        const token = jwt.sign(rest, process.env.ACCESS_TOKEN_SECRET);

        return res.send({
          success: true,
          message: "Login successfully",
          data: token,
        });
      }
    }

    res.send({
      success: false,
      message: "Email or password invalid",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};

exports.register = async (req, res) => {
  try {
    const dataRegister = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(dataRegister.password, salt);

    dataRegister.password = hash;

    await User.create(dataRegister);

    res.send({
      success: true,
      message: "User has been registered",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};
