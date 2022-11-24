const db = require("../models");
const ProductAndStore = db.Product_And_Store;

const getAllProductsAndStores = async (req, res) => {
  try {
    const productStore = await ProductAndStore.findAll();
    res.send(productStore);
  } catch (err) {
    console.log(err);
  }
};

const getOneProductsAndStores = async (req, res) => {
  try {
    const productStore = await ProductAndStore.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.send(productStore[0]);
  } catch (err) {
    console.log(err);
  }
};

const addNewProductsAndStores = async (req, res) => {
  try {
    await ProductAndStore.create(req.body);
    res.json({
      message: "Product and Store Added",
    });
  } catch (err) {
    console.log(err);
  }
};

const updateOneProductsAndStores = async (req, res) => {
    try {
      await ProductAndStore.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.json({
        message: "Product and Store Updated",
      });
    } catch (err) {
      console.log(err.message);
    }
  };
  
  const deleteOneProductsAndStores = async (req, res) => {
    try {
      await ProductAndStore.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.json({
        message: "Product and Store Deleted",
      });
    } catch (err) {
      console.log(err);
    }
  };

  module.exports = {
    getAllProductsAndStores,
    getOneProductsAndStores,
    addNewProductsAndStores,
    updateOneProductsAndStores,
    deleteOneProductsAndStores
  }