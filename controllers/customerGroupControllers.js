const db = require("../models");
const Group = db.Customer_Group;

const getAllGroups = async (req, res) => {
  try {
    const group = await Group.findAll();
    res.status(200).send(group);
  } catch (err) {
    console.log(err);
  }
};

const getOneGroup = async (req, res) => {
  try {
    const group = await Group.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send(group[0]);
  } catch (err) {
    console.log(err);
  }
};

const addNewGroup = async (req, res) => {
  try {
    const addGroup = await Group.create(req.body);
    res.status(200).json({
      message: "Group Added",
    });
    console.log(addGroup);
  } catch (err) {
    console.log(err);
  }
};

const updateOneGroup = async (req, res) => {
  try {
    const editGroup = await Group.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    console.log(editGroup)
    res.status(200).json({
      msg: "Group Updated",
    });
  } catch (err) {
    console.log(err.message);
  }
};

const deleteOneGroup = async (req, res) => {
  try {
    await Group.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      message: "Group Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllGroups,
  getOneGroup,
  addNewGroup,
  updateOneGroup,
  deleteOneGroup,
};
