const db = require("../models");
const Stock = db.Stock;
const Product = db.Product;
const Category = db.Category;

const getAllStocks = async (req, res) => {
  try {
    const stock = await Stock.findAll({ include: [Product, Category] });
    res.send(stock);
  } catch (err) {
    console.log(err);
  }
};

const getOneStock = async (req, res) => {
  try {
    const stock = await Stock.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.send(stock[0]);
  } catch (err) {
    console.log(err);
  }
};

const addNewStock = async (req, res) => {
  try {
    await Stock.create(req.body);
    res.json({
      message: "Stock Added",
    });
  } catch (err) {
    console.log(err);
  }
};

const updateOneStock = async (req, res) => {
  try {
    await Stock.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Stock Updated",
    });
  } catch (err) {
    console.log(err.message);
  }
};

const deleteOneStock= async (req, res) => {
  try {
    await Stock.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Stock Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllStocks,
  getOneStock,
  addNewStock,
  updateOneStock,
  deleteOneStock,
};
