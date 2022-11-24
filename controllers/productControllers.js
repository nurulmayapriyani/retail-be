const db = require("../models");
const Product = db.Product;
const Brand = db.Brand;
const Category = db.Category;

const getAllProducts = async (req, res) => {
  try {
    const product = await Product.findAll({ include: [Brand, Category] });
    res.send(product);
  } catch (err) {
    console.log(err);
  }
};

const getOneProduct = async (req, res) => {
  try {
    const product = await Product.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.send(product[0]);
  } catch (err) {
    console.log(err);
  }
};

const addNewProduct = async (req, res) => {
  try {
    await Product.create(req.body);
    res.json({
      message: "Product Added",
    });
  } catch (err) {
    console.log(err);
  }
};

const updateOneProduct = async (req, res) => {
  try {
    await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Product Updated",
    });
  } catch (err) {
    console.log(err.message);
  }
};

const deleteOneProduct = async (req, res) => {
  try {
    await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Product Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllProducts,
  getOneProduct,
  addNewProduct,
  updateOneProduct,
  deleteOneProduct,
};
