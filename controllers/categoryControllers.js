const db = require("../models");
const Category = db.Category;

const getAllCategories = async (req, res) => {
  try {
    const category = await Category.findAll();
    res.status(200).send(category);
  } catch (err) {
    console.log(err);
  }
};

const getOneCategory = async (req, res) => {
  try {
    const category = await Category.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send(category[0]);
  } catch (err) {
    console.log(err);
  }
};

const addNewCategory = async (req, res) => {
  try {
    const addCategory = await Category.create(req.body);
    res.status(200).json({
      message: "Category Added",
    });
    console.log(addCategory);
  } catch (err) {
    console.log(err);
  }
};

const updateOneCategory = async (req, res) => {
  try {
    const editCategory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    console.log(editCategory);
    res.status(200).json({
      msg: "Category Updated",
    });
  } catch (err) {
    console.log(err.message);
  }
};

const deleteOneCategory = async (req, res) => {
  try {
    await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      message: "Category Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllCategories,
  getOneCategory,
  addNewCategory,
  updateOneCategory,
  deleteOneCategory,
};
