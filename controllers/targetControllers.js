const db = require("../models");
const Target = db.Target;
const CustomerGroup = db.Customer_Group;

const getAllTargets = async (req, res) => {
  try {
    const target = await Target.findAll({ include: CustomerGroup });
    res.status(200).send(target);
  } catch (err) {
    console.log(err);
  }
};

const getOneTarget = async (req, res) => {
  try {
    const target = await Target.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send(target[0]);
  } catch (err) {
    console.log(err);
  }
};

const addNewTarget = async (req, res) => {
  try {
    const addTarget = await Target.create(req.body);
    res.status(200).json({
      message: "Target Added",
    });
    console.log(addTarget);
  } catch (err) {
    console.log(err);
  }
};

const updateOneTarget = async (req, res) => {
  try {
    const editTarget = await Target.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    console.log(editTarget);
    res.status(200).json({
      msg: "Target Updated",
    });
  } catch (err) {
    console.log(err.message);
  }
};

const deleteOneTarget = async (req, res) => {
  try {
    await Target.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      message: "Target Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllTargets,
  getOneTarget,
  addNewTarget,
  updateOneTarget,
  deleteOneTarget,
};
