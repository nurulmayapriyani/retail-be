const db = require("../models");
const Store = db.Customer_Store;

const getAllStores = async (req, res) => {
  try {
    const store = await Store.findAll();
    res.status(200).send(store);
  } catch (err) {
    console.log(err);
  }
};

const getOneStore = async (req, res) => {
  try {
    const store = await Store.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send(store[0]);
  } catch (err) {
    console.log(err);
  }
};

const addNewStore = async (req, res) => {
  try {
    await Store.create(req.body);
    res.status(200).json({
      message: "Store Added",
    });
  } catch (err) {
    console.log(err);
  }
};

const updateOneStore = async (req, res) => {
  try {
    await Store.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      message: "Store Updated",
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteOneStore = async (req, res) => {
  try {
    await Store.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      message: "Store Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllStores,
  getOneStore,
  addNewStore,
  updateOneStore,
  deleteOneStore,
};
